class Dialog {
    constructor(title, dialog, action, buttons, img, background, music, animation) {
        this.title = title // str
        this.dialog = dialog //str
        this.action = action // str
        this.buttons = buttons // Liste:str

        try {
            var d_background = (background.substring(0, 4) == "http" || background.substring(0, 4) == "data") ? background : defaultJSON.data.pictures[background]
        } catch { var d_background = undefined }
        try { var d_img = (img.substring(0, 4) == "http" || img.substring(0, 4) == "data") ? img : defaultJSON.data.pictures[img] } catch { var d_img = undefined }
        try { var d_music = (Array.isArray(music) ? music : defaultJSON.data.sounds[music]) } catch { var d_music = undefined }

        this.img = d_img // str
        this.background = d_background // str
        this.music = d_music // [str, float]
        this.animation = animation // str
    }

    preview(div, id) {
        var img = ""
        var title = ""
        var buttons = ""
        var action = ""
        var dialog = ""
        var zone = document.getElementById(div)

        zone.style.display = "flex"

        if (this.background != null) {
            zone.style.background = "url(" + this.background + ")"
            zone.style.objectFit = "fill"
            zone.style.backgroundRepeat = "no-repeat"
            zone.style.backgroundSize = "cover"
            zone.style.backgroundPosition = "center"
        } else { zone.style.background = "var(--soft-background)" }
        if (this.img != null) { img = `<div class="hero-js-dialog-img"><img src="${this.img}"></div>` }
        if (this.title != null) { title = `<div class="hero-js-dialog-header">${this.title}</div>` }
        if (this.action != null) { action = `<div class="hero-js-dialog-action">${this.action}</div>` }
        for (var i = 0; i != this.buttons.length; i++) { buttons += this.buttons[i].show() }
        if (this.dialog != null) { dialog = `<div class="hero-js-dialog-body">${this.dialog}</div>` }

        zone.innerHTML = `${img}<div class="dialog-id">${id}</div><div class="hero-js-dialog">${title}${dialog}${action}<div class="hero-js-dialog-button-zone">${buttons}</div></div>`
    }

    show() {
        var img = ""
        var title = ""
        var buttons = "<!-- goToIndex, condition, indexBtn, currentNumber, effect, text -->"
        var action = ""
        var dialog = ""

        setBackground(this.background)

        if (this.img != null) { img = `<div class="hero-js-dialog-img"><img src="${this.img}"></div>` }
        if (this.title != null) { title = `<div class="hero-js-dialog-header">${this.title}</div>` }
        if (this.action != null) { action = `<div class="hero-js-dialog-action">${this.action}</div>` }
        if (this.dialog != null) { dialog = `<div class="hero-js-dialog-body">${this.dialog}</div>` }
        for (var i = 0; i != this.buttons.length; i++) {
            var cond = checkCondition(this.buttons[i].condition, i, currentNumber, "load")
            buttons += this.buttons[i].createButton(cond, i, currentNumber)
        }

        document.getElementById('hero-js-all').innerHTML = `${img}<div class="hero-js-dialog">${title}${dialog}${action}<div class="hero-js-dialog-button-zone">${buttons}</div></div>`
        if (player != null) { player.show() }
        if (music == undefined) {
            music = new Music(this.music);
            music.play()
        } else if (this.music == undefined || this.music == null) { music.stop() } else { music.switch(this.music) }
    }
}
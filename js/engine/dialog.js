class Dialog {
    constructor(title, dialog, action, buttons, img, background, music) {
        this.title = title  // str
        this.dialog = dialog //str
        this.action = action // str
        this.buttons = buttons // Liste:str
        this.img = img // str
        this.background = background // str
        this.music = music
    }

    show() {
        var img = ""
        var title = ""
        var buttons = "<!-- goToIndex, condition, indexBtn, currentNumber, effect, text -->"
        var action = ""

        setBackground(this.background)

        if (this.img != null)
            img = '<div class="hero-js-dialog-img"><img src="' + this.img + '"></div>'
        if (this.title != null)
            title = '<div class="hero-js-dialog-header">' + this.title + '</div>'
        if (this.action != null)
            action = '<div class="hero-js-dialog-action">' + this.action + '</div>'
        for (var i = 0; i != this.buttons.length; i++) {
            if (!checkCondition(this.buttons[i].condition, i, currentNumber, "load")) {
                buttons += '<button class="hero-js-button hero-js-not-activate">🔒</button>\n'
            } else {
                buttons += '<button class="hero-js-button hero-js-activate"onclick="switchDialog(' +
                            this.buttons[i].goToIndex +
                            ', ' +
                            this.buttons[i].condition +
                            ', ' +
                            i +
                            ', ' +
                            currentNumber +
                            ', ' +
                            this.buttons[i].effect +
                            ',\'' +
                            this.buttons[i].notif +
                            '\')">' +
                            this.buttons[i].text +
                            '</button>\n'
            }
        }

        document.getElementById('hero-js-all').innerHTML =  img +
                                                            '<div class="hero-js-dialog">' +
                                                            title +
                                                            '<div class="hero-js-dialog-body">' + this.dialog + '</div>'+
                                                            action +
                                                            '<div class="hero-js-dialog-button-zone">' + buttons + '</div>\
                                                            </div>'
        if (player != null) {player.show()}

        if (music == undefined) {music = new Music(this.music); music.play()}
        else if (this.music == undefined || this.music == null) {music.stop()}
        else {music.switch(this.music)}
    }
}
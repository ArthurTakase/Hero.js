class Dialog {
    constructor(title, dialog, action, buttons, img, background) {
        this.title = title  // str
        this.dialog = dialog //str
        this.action = action // str
        this.buttons = buttons // Liste:str
        this.img = img // str
        this.background = background // str
    }

    show() {
        var img = ""
        var title = ""
        var buttons = ""

        setBackground(this.background)

        if (this.img != null)
            img = '<div class="hero-js-dialog-img"><img src="' + this.img + '"></div>'
        if (this.title != null)
            title = '<div class="hero-js-dialog-header">' + this.title + '</div>'
        for (var i = 0; i != this.buttons.length; i++)
            buttons += '<button onclick="switchDialog(' + this.buttons[i].goToIndex + ', ' + this.buttons[i].condition + ')">' + this.buttons[i].text + '</button>\n'

        document.getElementById('hero-js-all').innerHTML = img +
                                                            '<div class="hero-js-dialog">' +
                                                            title +
                                                                '<div class="hero-js-dialog-body">' + this.dialog + '</div>\
                                                                <div class="hero-js-dialog-action">' + this.action + '</div>\
                                                                <div class="hero-js-dialog-button-zone">' + buttons + '</div>\
                                                            </div>'
        if (showTitleHUD == "yes")
            showTitle()
        if (player != null)
            player.show()
    }
}
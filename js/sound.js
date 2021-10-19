class Sound {
    constructor(src) {
        if (src == null || src == undefined) {
            this.exist = false
            return
        }
        this.exist = true
        this.sound = document.createElement("audio")
        this.sound.src = src
        this.sound.setAttribute("preload", "auto")
        this.sound.setAttribute("controls", "none")
        this.sound.style.display = "none"
        document.body.appendChild(this.sound)
    }

    play() {
        if (this.exist)
            this.sound.play()
    }

    stop() {
        if (this.exist)
            this.sound.pause()
    }
}
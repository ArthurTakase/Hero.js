class Sound {
    constructor(data) {
        if (data == null || data == undefined) {
            this.exist = false
            return
        }
        this.exist = true
        this.sound = document.createElement("audio")
        this.sound.src = data[0]
        this.sound.setAttribute("preload", "auto")
        this.sound.setAttribute("controls", "none")
        this.sound.style.display = "none"
        this.sound.volume = data[1]
        this.sound.classList.add("sound")
        document.getElementById("hero-js-all").appendChild(this.sound)
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
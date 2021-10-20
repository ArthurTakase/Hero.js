class Music {
    constructor(src) {
        this.src = src
        if (src == null || src == undefined) {
            this.exist = false
            return
        }
        this.exist = true
        this.music = document.createElement("audio")
        this.music.src = src
        this.music.setAttribute("preload", "auto")
        this.music.setAttribute("controls", "none")
        this.music.setAttribute("loop", true)
        this.music.style.display = "none"
        this.music.style.zindex = "300000"
        document.body.appendChild(this.music)
    }

    play() {
        if (this.exist)
            this.music.play()
    }

    stop() {
        if (this.exist)
            this.music.pause()
    }

    switch(src) {
        if (this.src == src) {
            if (!isPlaying(this.music)) {this.play()}
            else {return}
        }
        this.stop()
        this.src = src
        this.music.src = src
        this.play()
    }
}
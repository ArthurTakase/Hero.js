class Music {
    constructor(data) {
        if (data == null || data == undefined) {
            this.exist = false
            return
        }
        this.src = data[0]
        this.exist = true
        this.music = document.createElement("audio")
        this.music.src = data[0]
        this.music.setAttribute("preload", "auto")
        this.music.setAttribute("controls", "none")
        this.music.setAttribute("loop", true)
        this.music.style.display = "none"
        this.music.volume = data[1]
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

    switch(data) {
        if (this.src == data[0]) {
            if (!isPlaying(this.music)) {this.play()}
            else {return}
        }
        this.stop()
        this.src = data[0]
        this.music.src = data[0]
        this.music.volume = data[1]
        this.play()
    }
}
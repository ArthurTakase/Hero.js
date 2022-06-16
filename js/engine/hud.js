function setBackground(img) {
    document.body.style.background = 'url(' + img + ')'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = "center"
}

function setDefaultHUD() {
    document.body.style.display = "flex"
    document.body.style.justifyContent = "center"
    document.body.style.alignItems = "center"
    document.body.style.width = "100vw"
    document.body.style.height = "100vh"
    document.body.style.overflow = "hidden"
    document.body.style.color = "white"
    document.body.style.objectFit = "fill"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"

    document.getElementById('header-toggle').classList.add("bx")
    document.getElementById('header-toggle').classList.add("bx-menu")
    document.getElementById('hero-js-all').style.display = "flex"
    document.getElementById('navbar').style.display = "flex"

}
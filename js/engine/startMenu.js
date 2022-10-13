function startMenu(json) {
    const startMenu = document.getElementById("startMenu")
    const startImg = document.getElementById("startMenuImg")
    const jaquette = document.getElementById("startMenuJaquette")
    const sub1 = document.getElementById("sub1")
    const sub2 = document.getElementById("sub2")
    const author = document.getElementById("startMenuAuthor")
    const name = document.getElementById("startMenuName")
    const date = document.getElementById("startMenuDate")
    const langue = document.getElementById("startMenuLangue")
    const description = document.getElementById("startMenuDescription")

    document.getElementById('home').style.display = "none"
    startMenu.style.display = "flex"

    startImg.src = json.data.pictures[json.gameInfos.previewBackground]
    sub1.src = json.data.pictures[json.gameInfos.previewPicture]
    sub2.src = json.data.pictures[json.gameInfos.previewPicture]
    jaquette.src = json.data.pictures[json.gameInfos.previewPicture]
    author.innerHTML = json.gameInfos.previewAuthor
    name.innerHTML = json.gameInfos.title
    date.innerHTML = json.gameInfos.previewDate
    langue.innerHTML = json.gameInfos.previewLanguage
    description.innerHTML = json.gameInfos.previewSynopsis

}

function backToHome() {
    window.location.href = "https://arthurtakase.github.io/Heros.js/"
}
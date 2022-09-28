// "previewPicture": "https://media.discordapp.net/attachments/513278653254336513/987017208788045894/index.jpeg",
// "previewSynopsis": "Donec metus leo, egestas ac lacinia eu, malesuada in erat. Proin semper mattis eros, sed dignissim nibh aliquam vitae. Sed a fringilla ex. Morbi semper scelerisque odio non dictum. Pellentesque massa mauris, rhoncus eget tortor vel, rhoncus accumsan erat. Morbi tristique, odio sit amet semper condimentum, neque eros pulvinar lectus, suscipit sagittis orci mi eu sem. Nunc suscipit efficitur tellus, et rhoncus ante aliquam vitae. Donec tempus porttitor tortor non sodales. Nulla pellentesque dapibus purus bibendum ornare. Quisque eu nisl sed est rhoncus tincidunt sit amet sit amet lacus. Suspendisse efficitur nulla id pharetra posuere. Curabitur dictum ex eu eros congue porta. Quisque nec ipsum nec lacus convallis facilisis sed at lectus. Nam porttitor metus eget erat sollicitudin, a semper ipsum facilisis. Vivamus vel hendrerit sapien. ",
// "previewLanguage": "Français",
// "previewAuthor": "Takase",
// "previewVersion": "1.0.0",
// "previewDate": "10/04/2002"



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
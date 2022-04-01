function editColor(div) {
    if (!colorAdvanced) advancedColor()

    const elem = document.getElementById('ColorElem')
    const color = document.getElementById('ColorColor')

    elem.value = div.firstChild.innerHTML
    color.value = div.lastChild.title
}

function editSkill(div) {
    var children = div.childNodes

    const page_div = [
        document.getElementById("skillName"),
        document.getElementById("skillAbility"),
        document.getElementById("skillStamina")
    ]
    for (i = 0; i < children.length; i++)
        page_div[i].value = children[i].innerHTML
}

function editObject(div) {
    var children = div.childNodes

    const pages_div = [
        document.getElementById("objectName"),
        document.getElementById("objectType"),
        document.getElementById("itemAbility"),
        document.getElementById("itemStamina"),
        document.getElementById("itemGold"),
        document.getElementById("itemMeal")
    ]

    for (var i = 0; i < children.length; i++)
        pages_div[i].value = children[i].innerHTML
}

function editPicture(div) {
    const name = document.getElementById("pictureName")
    const url = document.getElementById("pictureURL")

    name.value = div.firstChild.innerHTML
    url.value = div.lastChild.firstChild.src
}

function editSound(div) {
    const name = document.getElementById("soundName")
    const url = document.getElementById("soundURL")
    const volume = document.getElementById("soundVolume")

    name.value = div.childNodes[0].innerHTML
    url.value = div.childNodes[1].firstChild.src
    try { volume.value = parseInt(div.childNodes[2].innerHTML) } catch { volume.value = 50 }

}

function resetDialog() {
    const optionListe = document.getElementById('optionsList')
    const optionID = document.getElementById('optionID')
    const dialogTitle = document.getElementById('dialogTitle')
    const dialogBody = document.getElementById('dialogBody')
    const dialogAction = document.getElementById('dialogAction')
    const dialogMusic = document.getElementById('dialogMusic')
    const dialogBackground = document.getElementById('dialogBackground')
    const dialogPicture = document.getElementById('dialogImage')
    const dialogAnimation = document.getElementById('dialogAnimation')

    // ===== RESET =====
    dialogTitle.value = ""
    dialogBody.value = ""
    dialogAction.value = ""
    dialogMusic.value = "No Music"
    dialogBackground.value = "No Background"
    dialogPicture.value = "No Picture"
    dialogAnimation.value = "No Animation"

    // ===== RESET BUTTON =====
    buttonList = []
    optionIDGlobal = 0
    optionListe.classList.remove('table')
    optionListe.innerHTML = ""
    optionID.value = optionIDGlobal
}

function editDialog(div) {
    resetDialog()
    show('dialog')

    const zoneId = document.getElementById("dialogID")
    const title = document.getElementById("dialogTitle")
    const body = document.getElementById("dialogBody")
    const action = document.getElementById("dialogAction")
    const music = document.getElementById("dialogMusic")
    const background = document.getElementById("dialogBackground")
    const picture = document.getElementById("dialogImage")
    const animation = document.getElementById("dialogAnimation")


    var id = parseInt(div.firstChild.innerHTML)
    var dialog = dialogList[id]

    zoneId.value = id
    title.value = (dialog.title == undefined) ? "" : dialog.title
    body.value = (dialog.body == undefined) ? "" : dialog.body
    action.value = (dialog.action == undefined) ? "" : dialog.action
    music.value = (Array.isArray(dialog.music)) ? "No Music" : dialog.music
    background.value = (dialog.background == undefined) ? "No Background" : dialog.background
    picture.value = (dialog.img == undefined) ? "No Picture" : dialog.img
    animation.value = (dialog.animation == undefined) ? "No Animation" : dialog.animation

    console.log(dialog.buttons)

    dialog.buttons.forEach(element => { addOptionJSON(element) });
}
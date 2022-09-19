function editColor(div) {
    if (!colorAdvanced) advancedColor()

    const elem = document.getElementById('ColorElem')
    const color = document.getElementById('ColorColor')

    elem.value = div.firstElementChild.innerHTML
    color.value = div.lastChild.title

    window.scrollTo(0, 0);
}

function editSkill(div) {
    var children = div.childNodes

    const page_div = [
        document.getElementById("skillName"),
        document.getElementById("skillAbility"),
        document.getElementById("skillStamina")
    ]

    console.log(children)

    for (i = 0; i < children.length; i++)
        page_div[i].value = children[i].innerHTML

    window.scrollTo(0, 0);
}

function editObject(div) {
    var children = div.childNodes

    const pages_div = [
        document.getElementById("objectName"),
        document.getElementById("itemAbility"),
        document.getElementById("itemStamina"),
        document.getElementById("itemGold"),
        document.getElementById("itemExtra")
    ]

    console.log(children)

    for (var i = 0; i < children.length; i++) {
        console.log(children[i].innerHTML)
        pages_div[i].value = children[i].innerHTML
    }

    window.scrollTo(0, 0);
}

function editPicture(div) {
    const name = document.getElementById("pictureName")
    const url = document.getElementById("pictureURL")

    name.value = div.firstElementChild.innerHTML
    url.value = div.lastChild.firstElementChild.src

    window.scrollTo(0, 0);
}

function editSound(div) {
    const name = document.getElementById("soundName")
    const url = document.getElementById("soundURL")
    const volume = document.getElementById("soundVolume")

    name.value = div.childNodes[0].innerHTML
    url.value = div.childNodes[1].firstElementChild.src
    try { volume.value = parseFloat(div.childNodes[2].innerHTML) * 100 } catch { volume.value = 50 }

    window.scrollTo(0, 0);
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

    window.scrollTo(0, 0);
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

    var id = parseInt(div.firstElementChild.innerHTML)
    var dialog = dialogList[id]

    zoneId.value = id
    title.value = (dialog.title == undefined) ? "" : dialog.title
    body.value = (dialog.body == undefined) ? "" : dialog.body
    action.value = (dialog.action == undefined) ? "" : dialog.action
    music.value = (dialog.music == undefined) ? "No Music" : ((Array.isArray(dialog.music)) ? "No Music" : dialog.music)
    background.value = (dialog.background == undefined) ? "No Background" : dialog.background
    picture.value = (dialog.img == undefined) ? "No Picture" : dialog.img
    animation.value = (dialog.animation == undefined) ? "No Animation" : dialog.animation

    try { dialog.buttons.forEach(element => { addOptionJSON(element) }); } catch (e) {}

    window.scrollTo(0, 0);
    Instantpreview()
}

function editButton(div) {
    const zoneId = document.getElementById("dialogID")
    const b_buttonId = document.getElementById("optionID")
    const b_body = document.getElementById("optionBody")
    const b_index = document.getElementById("optionGoToIndex")
    const b_music = document.getElementById("optionSound")
    const b_optionCondition = document.getElementById("optionCondition")
    const b_optionEffect = document.getElementById("optionEffect")

    var id = parseInt(div.firstElementChild.innerHTML)
    try {
        var button = dialogList[parseInt(zoneId.value)].buttons[id]
    } catch { var button = buttonList[id] }

    b_buttonId.value = id
    b_body.value = button.text
    b_index.value = (button.goToIndex == undefined) ? "" : button.goToIndex

    b_music.value = (button.sound == undefined) ? "No Sound" : ((Array.isArray(button.sound)) ? "No Sound" : button.sound)
    b_optionCondition.value = (button.condition == undefined) ? "No Condition" : button.condition
    b_optionEffect.value = (button.effect == undefined || button.effect == "FIGHT") ? "No Effect" : button.effect

    appendCondition()
    appendEffect()

    const conditionValue = document.getElementById("conditionValue")
    const conditionCheck = document.getElementById("conditionIsHere")
    const effectValue = document.getElementById("effectValue")

    switch (b_optionCondition.value) {
        case "GOLD":
        case "EXTRA":
        case "STAMINA":
        case "ABILITY":
            conditionValue.value = button.conditionData[1]
            break
        case "OBJECT":
            conditionValue.value = button.conditionData[2]
            conditionCheck.checked = button.conditionData[0]
            break
        case "SKILL":
            conditionValue.value = button.conditionData[1]
            conditionCheck.checked = button.conditionData[0]
            break
        default:
            break
    }

    switch (b_optionEffect.value) {
        case "REMOVE_OBJECT":
        case "ADD_OBJECT":
            effectValue.value = button.effectData[1]
            break
        case "EXTRA":
        case "STAMINA":
        case "ABILITY":
        case "LIFE":
        case "GOLD":
            effectValue.value = button.effectData[0]
            break
        case "RESTART":
        default:
            break
    }

}
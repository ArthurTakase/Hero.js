function Instantpreview() {
    var dialogTitle = document.getElementById('dialogTitle')
    var dialogBody = document.getElementById('dialogBody')
    var dialogAction = document.getElementById('dialogAction')
    var dialogBackground = document.getElementById('dialogBackground')
    var dialogPicture = document.getElementById('dialogImage')
    var dialogAnimation = document.getElementById('dialogAnimation')

    var allButtons = []
    for (b in buttonList) {
        allButtons.push(
            new Button(
                buttonList[b].text,
                buttonList[b].goToIndex,
                null,
                buttonList[b].conditionData,
                null,
                buttonList[b].effectData,
                buttonList[b].notification,
                null
            )
        )
    }

    var background = (dialogBackground.value.substring(0, 4) == "http") ? dialogBackground.value : pictureJson[dialogBackground.value]
    try { var img = (dialogPicture.value.substring(0, 4) == "http") ? dialogPicture.value : pictureJson[dialogPicture.value] } catch { var img = undefined }

    // Génération du dialogue
    var dialog = new Dialog(
        dialogTitle.value,
        dialogBody.value,
        dialogAction.value,
        allButtons,
        img,
        background,
        null,
        dialogAnimation.value
    )

    console.log(dialog)

    dialog.preview("instantPreview", 0)

}

function preview(div, id) {
    var allButtons = []
    var currentDialog = dialogList[id]

    // Génération des boutons
    for (b in currentDialog.buttons) {
        // Création du bouton
        allButtons.push(
            new Button(
                currentDialog.buttons[b].text,
                currentDialog.buttons[b].goToIndex,
                null,
                currentDialog.buttons[b].conditionData,
                null,
                currentDialog.buttons[b].effectData,
                currentDialog.buttons[b].notification,
                null
            )
        )
    }

    try { var background = (currentDialog.background.substring(0, 4) == "http") ? currentDialog.background : pictureJson[currentDialog.background] } catch (e) { var background = undefined }
    try { var img = (currentDialog.img.substring(0, 4) == "http") ? currentDialog.img : pictureJson[currentDialog.img] } catch { var img = undefined }

    // Génération du dialogue
    var dialog = new Dialog(
        currentDialog.title,
        currentDialog.body,
        currentDialog.action,
        allButtons,
        img,
        background,
        currentDialog.music,
        currentDialog.animation
    )

    if (div == null || div == "null") { dialog.preview("preview", id) }
    dialog.preview(div, id)

}
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

    var background = (currentDialog.background.substring(0, 4) == "http") ? currentDialog.background : pictureJson[currentDialog.background]
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
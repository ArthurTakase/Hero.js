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
                new Sound(currentDialog.buttons[b].sound)
            )
        )
    }

    // Génération du dialogue
    var dialog =  new Dialog(
        currentDialog.title,
        currentDialog.body,
        currentDialog.action,
        allButtons,
        currentDialog.img,
        currentDialog.background,
        currentDialog.music,
        currentDialog.animation
    )

    if (div == null || div == "null") {dialog.preview("preview", id)}
    dialog.preview(div, id)

}
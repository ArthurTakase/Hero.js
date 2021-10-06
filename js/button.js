class Button {
    constructor(text, goToIndex, condition, data) {
        this.text = text // str
        this.goToIndex = goToIndex // int
        this.condition = condition // int
        this.data = data// Liste
    }
}

function checkCondition(condition, indexBtn, oldIndexDialog) {
    // 1 -> GOLD [isSup, amount]
    // null -> Rien
    var data = allDialog[oldIndexDialog].buttons[indexBtn].data

    if (condition == 1) {
        if (data[0] && player.gold >= data[1])
            return true
        if (!data[0] && player.gold <= data[1])
            return true
        console.log("false")
        return false
    } else {
        console.log("Conditions non conformes.")
        return false
    }
}

function switchDialog(indexDialog, condition, indexBtn, oldIndexDialog) {
    if (condition == null) {
        currentNumber = indexDialog
        allDialog[currentNumber].show(player)
        player.show()
        showTitle()
    } else if (checkCondition(condition, indexBtn, oldIndexDialog)){
        currentNumber = indexDialog
        allDialog[currentNumber].show(player)
        player.show()
        showTitle()
    }
}
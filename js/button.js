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
    // 2 -> MEAL [isSup, amount]
    // 2 -> STAMINA [isSup, amount]
    // 2 -> ABILITY [isSup, amount]
    // null -> Rien
    var data = allDialog[oldIndexDialog].buttons[indexBtn].data

    console.log(data)

    switch (condition) {
        case 1: // GOLD
            if (data[0] && player.gold >= data[1])
                return true
            if (!data[0] && player.gold <= data[1])
                return true
            return false
        case 2: // MEAL
            if (data[0] && player.meal >= data[1])
                return true
            if (!data[0] && player.meal <= data[1])
                return true
            return false
        case 3: // STAMINA
            if (data[0] && player.stamina >= data[1])
                return true
            if (!data[0] && player.stamina <= data[1])
                return true
            return false
        case 4: // ABILITY
            if (data[0] && player.ability >= data[1])
                return true
            if (!data[0] && player.ability <= data[1])
                return true
            return false
        default:
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
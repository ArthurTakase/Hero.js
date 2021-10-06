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
    // 3 -> STAMINA [isSup, amount]
    // 4 -> ABILITY [isSup, amount]
    // 5 -> SKILL [isHere, type]
    // 6 -> OBJECT [isHere, type, name]
    // null -> Rien
    var data = allDialog[oldIndexDialog].buttons[indexBtn].data
    var temp
    var temp2

    console.log(data)

    switch (condition) {
        case 1: // GOLD
            if (data[0] && player.gold >= data[1]) {return true}
            if (!data[0] && player.gold <= data[1]) {return true}
            return false
        case 2: // MEAL
            if (data[0] && player.meal >= data[1]) {return true}
            if (!data[0] && player.meal <= data[1]) {return true}
            return false
        case 3: // STAMINA
            if (data[0] && player.stamina >= data[1]) {return true}
            if (!data[0] && player.stamina <= data[1]) {return true}
            return false
        case 4: // ABILITY
            if (data[0] && player.ability >= data[1]) {return true}
            if (!data[0] && player.ability <= data[1]) {return true}
            return false
        case 5: // SKILL
            temp = getFromName(data[1], player.skill)
            if (data[0] && temp != null) {return true}
            if (!data[0] && temp == null) {return true}
            return false
        case 6:
            if (data[1] == "inventory") {temp2 = player.inventory}
            else {temp2 = player.special}
            temp = getFromName(data[2], temp2)
            if (data[0] && temp != null) {return true}
            if (!data[0] && temp == null) {return true}
            return false
        default:
            return false
    }
}

function switchDialog(indexDialog, condition, indexBtn, oldIndexDialog) {
    if (condition == null) {
        currentNumber = indexDialog
        allDialog[currentNumber].show(player)
    } else if (checkCondition(condition, indexBtn, oldIndexDialog)){
        currentNumber = indexDialog
        allDialog[currentNumber].show(player)
    }
}
class Button {
    constructor(text, goToIndex, condition, conditionData, effect, effectData) {
        this.text = text // str
        this.goToIndex = goToIndex // int
        this.condition = condition // int
        this.conditionData = conditionData// Liste
        this.effect = effect // int
        this.effectData = effectData // Liste
    }
}

function checkCondition(condition, indexBtn, oldIndexDialog) {
    var data = allDialog[oldIndexDialog].buttons[indexBtn].conditionData
    var temp, temp2

    switch (condition) {
        case 1: // GOLD [isSup, amount]
            if (data[0] && player.gold >= data[1]) {return true}
            if (!data[0] && player.gold <= data[1]) {return true}
            return false
        case 2: // MEAL [isSup, amount]
            if (data[0] && player.meal >= data[1]) {return true}
            if (!data[0] && player.meal <= data[1]) {return true}
            return false
        case 3: // STAMINA [isSup, amount]
            if (data[0] && player.stamina >= data[1]) {return true}
            if (!data[0] && player.stamina <= data[1]) {return true}
            return false
        case 4: // ABILITY [isSup, amount]
            if (data[0] && player.ability >= data[1]) {return true}
            if (!data[0] && player.ability <= data[1]) {return true}
            return false
        case 5: // SKILL [isHere, type]
            temp = getFromName(data[1], player.skill)
            if (data[0] && temp != null) {return true}
            if (!data[0] && temp == null) {return true}
            return false
        case 6: // OBJECT [isHere, type, name]
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

function setEffect(effect, indexBtn, oldIndexDialog) {
    var data = allDialog[oldIndexDialog].buttons[indexBtn].effectData
    var temp

    console.log(data)

    switch (effect) {
        case 1: // REMOVE_OBJECT [inventaire, object]
            if (data[0] == "inventory") {temp = player.inventory}
            else {temp = player.special}
            removeFromPlayer(data[1], temp)
            break
        default:
            break
    }
}

function switchDialog(indexDialog, condition, indexBtn, oldIndexDialog, effect) {
    if (condition == null) {
        currentNumber = indexDialog
        setEffect(effect, indexBtn, oldIndexDialog)
        allDialog[currentNumber].show(player)
    } else if (checkCondition(condition, indexBtn, oldIndexDialog)){
        currentNumber = indexDialog
        setEffect(effect, indexBtn, oldIndexDialog)
        allDialog[currentNumber].show(player)
    }
}
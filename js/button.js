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
            temp = setInt(data[1])
            if (data[0] && player.gold >= temp) {return true}
            if (!data[0] && player.gold <= temp) {return true}
            return false
        case 2: // MEAL [isSup, amount]
            temp = setInt(data[1])
            if (data[0] && player.meal >= temp) {return true}
            if (!data[0] && player.meal <= temp) {return true}
            return false
        case 3: // STAMINA [isSup, amount]
            temp = setInt(data[1])
            if (data[0] && player.stamina >= temp) {return true}
            if (!data[0] && player.stamina <= temp) {return true}
            return false
        case 4: // ABILITY [isSup, amount]
            temp = setInt(data[1])
            if (data[0] && player.ability >= temp) {return true}
            if (!data[0] && player.ability <= temp) {return true}
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
    console.log(allDialog[oldIndexDialog].buttons[indexBtn])
    var data = allDialog[oldIndexDialog].buttons[indexBtn].effectData
    var temp

    console.log(data)

    switch (effect) {
        case 1: // REMOVE_OBJECT [inventaire, object]
            if (data[0] == "inventory") {temp = player.inventory}
            else {temp = player.special}
            removeFromPlayer(data[1], temp)
            break
        case 2: // ADD_OBJECT [inventaire, object]
            if (data[0] == "inventory") {newObject(data[1], inventoryList, player.inventory)}
            else {newObject(data[1], specialList, player.special)}
            break
        case 3: // REMOVE_GOLD [amount]
            player.gold -= setInt(data[0]); break
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
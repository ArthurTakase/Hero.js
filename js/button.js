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

function checkCondition(condition, indexBtn, oldIndexDialog, type) {
    var data = allDialog[oldIndexDialog].buttons[indexBtn].conditionData
    var temp, temp2

    // Verification si le bouton est un random (change l'affichage du bouton en rouge si impossible)
    if (type == "load" && data != null) {
        for (var i = 0; i != data.length; i++) {
            try {if (data[i].startsWith("RANDOM")) {return true}} catch (e) {}
        }
    }

    switch (condition) {
        case null: return true; break
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
        default: return false
    }
}

function setEffect(effect, indexBtn, oldIndexDialog) {
    // console.log(allDialog[oldIndexDialog].buttons[indexBtn])
    var data = allDialog[oldIndexDialog].buttons[indexBtn].effectData
    var temp, temp2

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
        case 3: player.gold -= setInt(data[0]); break
        case 4: player.gold += setInt(data[0]); break
        case 5: player.meal -= setInt(data[0]); break
        case 6: player.meal += setInt(data[0]); break
        case 7:
            player.maxStamina -= setInt(data[0])
            if (player.stamina > player.maxStamina)
                player.stamina = player.maxStamina
            break
        case 8: player.maxStamina += setInt(data[0]); break
        case 9: player.ability -= setInt(data[0]); break
        case 10: player.ability += setInt(data[0]); break
        case 11:
            player.stamina += setInt(data[0])
            if (player.stamina > player.maxStamina)
                player.stamina = player.maxStamina
            break
        case 12:
            player.stamina += setInt(data[0])
            if (player.stamina < 0)
                player.stamina = 0
            break
        default: break
    }
}

function switchDialog(indexDialog, condition, indexBtn, oldIndexDialog, effect) {
    if (checkCondition(condition, indexBtn, oldIndexDialog, "test")){
        currentNumber = indexDialog
        setEffect(effect, indexBtn, oldIndexDialog)
        // si le joueur est mort, l'amener à son onglet de mort
        allDialog[currentNumber].show(player)
    }
}
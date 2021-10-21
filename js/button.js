class Button {
    constructor(text, goToIndex, condition, conditionData, effect, effectData, notif) {
        this.text = text
        this.goToIndex = goToIndex
        this.condition = condition
        this.conditionData = conditionData
        this.effect = effect
        this.effectData = effectData
        this.notif = notif
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

function setEffect(effect, indexBtn, oldIndexDialog, data) {
    var temp, temp2
    if (data == null)
        data = allDialog[oldIndexDialog].buttons[indexBtn].effectData
    
    switch (effect) {
        case 1: // REMOVE_OBJECT [inventaire, object]
            if (data[0] == "inventory") {temp = player.inventory}
            else {temp = player.special}
            removeFromPlayer(data[1], temp)
            return data[1]
        case 2: // ADD_OBJECT [inventaire, object]
            if (data[0] == "inventory") {newObject(data[1], inventoryList, player.inventory)}
            else {newObject(data[1], specialList, player.special)}
            return data[1]
        case 3: temp2 = setInt(data[0]); player.gold -= temp2; return temp2
        case 4: temp2 = setInt(data[0]); player.gold += temp2; return temp2
        case 5: temp2 = setInt(data[0]); player.meal -= temp2; return temp2
        case 6: temp2 = setInt(data[0]); player.meal += temp2; return temp2
        case 7:
            temp2 = setInt(data[0])
            player.maxStamina -= temp2
            if (player.stamina > player.maxStamina)
                player.stamina = player.maxStamina
            return temp2
        case 8: temp2 = setInt(data[0]); player.maxStamina += temp2; return temp2
        case 9: temp2 = setInt(data[0]); player.ability -= temp2; return temp2
        case 10: temp2 = setInt(data[0]); player.ability += temp2; return temp2
        case 11:
            temp2 = setInt(data[0])
            player.stamina += temp2
            if (player.stamina > player.maxStamina)
                player.stamina = player.maxStamina
            return temp2
        case 12:
            temp2 = setInt(data[0])
            player.stamina += temp2
            if (player.stamina < 0)
                player.stamina = 0
            return temp2
        case 13: launchFight(data); return "FIGHT"
        case 14: restart(); return
        default: break
    }
    return null
}

function setNotif(notif, effect, data) {
    if (notif == 'false')
        return

    var notifHTML = '<div id="hero-js-notification">\
                            <div class="notif-title">ℹ️ Notification</div><div class="notif-body">'
    if (notif == 'undefined') {
        switch (effect) {
            case 1: notifHTML += getObjectName(data) + " retiré de votre inventaire.</p></div>"; break
            case 2: notifHTML += getObjectName(data) + " ajouté à votre inventaire.</p></div>"; break
            case 3: notifHTML += "-" + data + " gold(s).</div></div>"; break
            case 4: notifHTML += "+" + data + " gold(s).</div></div>"; break
            case 5: notifHTML += "-" + data + " meal(s).</div></div>"; break
            case 6: notifHTML += "+" + data + " meal(s).</div></div>"; break
            case 7: notifHTML += "-" + data + " stamina.</div></div>"; break
            case 8: notifHTML += "+" + data + " stamina.</div></div>"; break
            case 9: notifHTML += "-" + data + " ability.</div></div>"; break
            case 10: notifHTML += "+" + data + " ability.</div></div>"; break
            default : return
        }
    } else
        notifHTML += notif  + '</div></div>'
    document.getElementById('hero-js-all').innerHTML += notifHTML
}

function switchDialog(indexDialog, condition, indexBtn, oldIndexDialog, effect, notif) {
    var temp

    if (checkCondition(condition, indexBtn, oldIndexDialog, "test")) {
        currentNumber = indexDialog
        temp = setEffect(effect, indexBtn, oldIndexDialog, null)
        if (temp != "FIGHT") {
            allDialog[currentNumber].show(player)
            setNotif(notif, effect, temp)
        }
    }
}
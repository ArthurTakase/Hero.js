class Button {
    constructor(text, goToIndex, condition, conditionData, effect, effectData, notif, sound) {
        this.text = text
        this.goToIndex = goToIndex
        this.condition = condition
        this.conditionData = conditionData
        this.effect = effect
        this.effectData = effectData
        this.notif = notif
        this.sound = sound
    }
}

function checkCondition(condition, indexBtn, oldIndexDialog, type) {
    var data = allDialog[oldIndexDialog].buttons[indexBtn].conditionData
    var temp

    // Verification si le bouton est un random (change l'affichage du bouton en rouge si impossible)
    if (type == "load" && data != null) {
        for (var i = 0; i != data.length; i++) {
            try { if (data[i].startsWith("RANDOM")) { return true } } catch (e) {}
        }
    }

    console.log(condition)

    switch (condition) {
        case conditionID["GOLD"]: // GOLD [isSup, amount]
            temp = setInt(data[1])
            if (data[0] && player.gold >= temp) { return true }
            if (!data[0] && player.gold <= temp) { return true }
            return false
        case conditionID["EXTRA"]: // Extra [isSup, amount]
            temp = setInt(data[1])
            if (data[0] && player.extra >= temp) { return true }
            if (!data[0] && player.extra <= temp) { return true }
            return false
        case conditionID["STAMINA"]: // STAMINA [isSup, amount]
            temp = setInt(data[1])
            if (data[0] && player.stamina >= temp) { return true }
            if (!data[0] && player.stamina <= temp) { return true }
            return false
        case conditionID["ABILITY"]: // ABILITY [isSup, amount]
            temp = setInt(data[1])
            if (data[0] && player.ability >= temp) { return true }
            if (!data[0] && player.ability <= temp) { return true }
            return false
        case conditionID["SKILL"]: // SKILL [isHere, type]
            temp = getFromName(data[1], player.skill)
            if (data[0] && temp != null) { return true }
            if (!data[0] && temp == null) { return true }
            return false
        case conditionID["OBJECT"]: // OBJECT [isHere, name]
            temp = getFromName(data[1], player.inventory)
            if (data[0] && temp != null) { return true }
            if (!data[0] && temp == null) { return true }
            return false
        case conditionID["INPUT"]:
            return true
        default:
            return true
    }
}

function setEffect(effect, indexBtn, oldIndexDialog, data) {
    var temp2
    if (data == null)
        data = allDialog[oldIndexDialog].buttons[indexBtn].effectData

    switch (effect) {
        case effectID["REMOVE_OBJECT"]: // REMOVE_OBJECT [inventaire, object]
            removeFromPlayer(data[1], player.inventory)
            return data[1]
        case effectID["ADD_OBJECT"]: // ADD_OBJECT [inventaire, object]
            newObject(data[0], inventoryList, player.inventory)
            return data[1]
        case effectID["GOLD"]: // GOLD [amount]
            temp2 = setInt(data[0]);
            player.gold += temp2;
            return temp2
        case effectID["EXTRA"]: // EXTRA [amount]
            temp2 = setInt(data[0]);
            player.extra += temp2;
            return temp2
        case effectID["STAMINA"]: // STAMINA [amount]
            temp2 = setInt(data[0]);
            player.maxStamina += temp2;
            if (player.stamina > player.maxStamina)
                player.stamina = player.maxStamina
            return temp2
        case effectID["ABILITY"]: // ABILITY [amount]
            temp2 = setInt(data[0]);
            player.ability += temp2;
            return temp2
        case effectID["LIFE"]:
            temp2 = setInt(data[0])
            player.stamina += temp2
            if (player.stamina > player.maxStamina)
                player.stamina = player.maxStamina
            if (player.stamina < 0)
                player.stamina = 0
            return temp2
        case effectID["FIGHT"]:
            launchFight(data);
            return "FIGHT"
        case effectID["RESTART"]:
            restart();
            return
        default:
            break
    }
    return null
}

function setNotif(notif, effect, data) {
    if (notif == 'false')
        return

    var notifHTML = '<div id="hero-js-notification">\
                            <div class="notif-title"><i class="bx bx-info-circle"></i> Infos</div><div class="notif-body">'
    if (notif == 'undefined') {
        switch (effect) {
            case 1:
                notifHTML += "Remove " + getObjectName(data) + "</p></div>";
                break
            case 2:
                notifHTML += "Add " + getObjectName(data) + "</p></div>";
                break
            case 4:
                notifHTML += "+" + data + " gold(s).</div></div>";
                break
            case 6:
                notifHTML += "+" + data + " extra(s).</div></div>";
                break
            case 8:
                notifHTML += "+" + data + " stamina.</div></div>";
                break
            case 10:
                notifHTML += "+" + data + " ability.</div></div>";
                break
            default:
                return
        }
    } else
        notifHTML += notif + '</div></div>'
    document.getElementById('hero-js-all').innerHTML += notifHTML
}

function switchDialog(indexDialog, condition, indexBtn, oldIndexDialog, effect, notif) {
    var temp

    if (checkCondition(condition, indexBtn, oldIndexDialog, "test")) {
        if (indexDialog == null || indexDialog == undefined) { currentNumber += 1 } else { currentNumber = indexDialog }
        temp = setEffect(effect, indexBtn, oldIndexDialog, null)
        allDialog[oldIndexDialog].buttons[indexBtn].sound.play()
        if (temp != "FIGHT") {
            allDialog[currentNumber].show(player)
            setNotif(notif, effect, temp)
            anime(allDialog[currentNumber].animation)
        }
    }
}
let optionIDGlobal = 0
let buttonList = []
let buttonIsExpand = true

function addOptionJSON(option) {
    const liste = document.getElementById('optionsList')
    const optionID = document.getElementById('optionID')

    // ===== SAVE =====
    if (buttonList.length == 0) { liste.classList.add("table") }
    buttonList.push(option);
    optionIDGlobal += 1
    optionID.value = optionIDGlobal

    // ===== TABLEAU =====
    liste.innerHTML = '<tr class="tableHeader"><th>ID</th><th>Text</th><th>Go To</th></tr>'
    for (button in buttonList) {
        if (buttonList[button].goToIndex == undefined) {
            liste.innerHTML += '<tr class="' + editValue + ' ' + editValueButton + '"><td>' + button + '</td><td>' + buttonList[button].text + '</td><td>Next</td></tr>'
        } else {
            liste.innerHTML += '<tr class="' + editValue + ' ' + editValueButton + '"><td>' + button + '</td><td>' + buttonList[button].text + '</td><td>' + buttonList[button].goToIndex + '</td></tr>'
        }
    }
}

function addOption() {
    const liste = document.getElementById('optionsList')
    var optionID = document.getElementById('optionID')
    var optionBody = document.getElementById('optionBody')
    var optionGoTo = document.getElementById('optionGoToIndex')
    var optionSound = document.getElementById('optionSound')
    var optionCondition = document.getElementById('optionCondition')
    var optionEffect = document.getElementById('optionEffect')
    var conditionData = document.getElementById('conditionValue')
    var conditionIsHere = document.querySelector('#conditionIsHere')
    var effectData = document.getElementById('effectValue')
    var notificationCheck = document.getElementById('notificationIsEnable')
    var notificationData = document.getElementById('notificationText')
    var json = {}

    console.log("coucou")

    if (optionBody.value == "") { return }

    console.log("oui")

    json.text = optionBody.value
    if (optionGoTo.value != "") { json.goToIndex = parseInt(optionGoTo.value) }
    if (optionSound.value != "No Sound" && optionSound.value != "") { json.sound = optionSound.value }

    // ===== CONDITION =====
    switch (optionCondition.value) {
        case "GOLD":
        case "EXTRA":
        case "STAMINA":
        case "ABILITY":
            json.condition = optionCondition.value
            json.conditionData = [true, (isnum(conditionData.value)) ? parseInt(conditionData.value) : conditionData.value]
            break
        case "SKILL":
            json.condition = optionCondition.value
            try { json.conditionData = [conditionIsHere.checked, skillsList[conditionData.value].name] } catch (e) {
                if (conditionData == null || conditionData == undefined || conditionData.value == "")
                    return
                json.conditionData = [conditionIsHere.checked, conditionData.value]
            }
            break
        case "OBJECT":
            json.condition = optionCondition.value
            try { json.conditionData = [conditionIsHere.checked, objectsJson[conditionData.value].name] } catch (e) {
                if (conditionData == null || conditionData == undefined || conditionData == "")
                    return
                json.conditionData = [conditionIsHere.checked, conditionData.value]
            }
            break
        default:
            break
    }

    // ===== EFFECT =====
    switch (optionEffect.value) {
        case "REMOVE_OBJECT":
        case "ADD_OBJECT":
            json.effect = optionEffect.value
            try { json.effectData = [effectData.value] } catch (e) { return }
            break
        case "EXTRA":
        case "STAMINA":
        case "ABILITY":
        case "LIFE":
            json.effect = optionEffect.value
            json.effectData = (isnum(effectData.value)) ? parseInt(effectData.value) : effectData.value
            break
        case "RESTART":
            json.effect = optionEffect.value
        default:
            break
    }

    // ===== SAVE =====
    if (buttonList.length == 0) { liste.classList.add("table") }
    if (parseInt(optionID.value) != optionIDGlobal) { buttonList[parseInt(optionID.value)] = json } else {
        buttonList.push(json);
        optionIDGlobal += 1
    }

    // ===== TABLEAU =====
    liste.innerHTML = '<tr class="tableHeader"><th>ID</th><th>Text</th><th>Go To</th></tr>'
    for (button in buttonList) {
        if (buttonList[button].goToIndex == undefined) {
            liste.innerHTML += '<tr class="' + editValue + ' ' + editValueButton + '"><td>' + button + '</td><td>' + buttonList[button].text + '</td><td>Next</td></tr>'
        } else {
            liste.innerHTML += '<tr class="' + editValue + ' ' + editValueButton + '"><td>' + button + '</td><td>' + buttonList[button].text + '</td><td>' + buttonList[button].goToIndex + '</td></tr>'
        }
    }

    if (notificationCheck.checked) {
        if (notificationData.value != "") json.notification = notificationData.value
    } else { json.notification = false }

    // ===== RESET =====
    optionID.value = optionIDGlobal
    optionBody.value = ""
    optionGoTo.value = ""
    optionCondition.value = "No Condition"
    optionEffect.value = "No Effect"
    optionSound.value = "No Sound"
    notificationCheck.checked = true
    notificationData.value = ""
    appendCondition()
    appendEffect()
    optionBody.focus()
    Instantpreview()
}

function expandButton() {
    const sound = document.getElementById("optionSound")
    const condition = document.getElementById("optionConditionZone")
    const effect = document.getElementById("optionEffectZone")
    const notification = document.getElementById("optionNotificationZone")
    const button = document.getElementById("buttonMore")

    if (buttonIsExpand) {
        button.innerHTML = "<i class='bx bx-expand-alt' ></i>"
        sound.style.display = "none"
        condition.style.display = "none"
        effect.style.display = "none"
        notification.style.display = "none"
        buttonIsExpand = false
    } else {
        button.innerHTML = "<i class='bx bx-collapse-alt' ></i>"
        sound.style.display = "flex"
        condition.style.display = "flex"
        effect.style.display = "flex"
        notification.style.display = "flex"
        buttonIsExpand = true
    }
}

expandButton()
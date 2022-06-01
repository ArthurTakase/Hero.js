let optionIDGlobal = 0
let buttonList = []

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
    var conditionData = document.getElementById('conditionValue') // may null
    var conditionIsHere = document.querySelector('#conditionIsHere') // may null
    var effectData = document.getElementById('effectValue') // may null
    var json = {}

    if (optionBody.value == "") { return }

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

    // ===== RESET =====
    optionID.value = optionIDGlobal
    optionBody.value = ""
    optionGoTo.value = ""
    optionCondition.value = "No Condition"
    optionEffect.value = "No Effect"
    optionSound.value = "No Sound"
    appendCondition()
    appendEffect()
    optionBody.focus()
    Instantpreview()
}
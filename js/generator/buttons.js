let optionIDGlobal = 0
let buttonList = []

function addOptionJSON(option) {
    console.log(option)

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
        if (buttonList[button].goToIndex == undefined) { liste.innerHTML += '<tr><td>' + button + '</td><td>' + buttonList[button].text + '</td><td>Next</td></tr>' } else { liste.innerHTML += '<tr><td>' + button + '</td><td>' + buttonList[button].text + '</td><td>' + buttonList[button].goToIndex + '</td></tr>' }
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
    if (optionSound.value != "No Sound") { json.sound = soundJSON[optionSound.value] }

    // ===== CONDITION =====
    switch (optionCondition.value) {
        case "GOLD":
        case "MEAL":
        case "STAMINA":
        case "ABILITY":
            json.condition = optionCondition.value
            json.conditionData = [true, parseInt(conditionData.value)]
            break
        case "SKILL":
            json.condition = optionCondition.value
            try { json.conditionData = [conditionIsHere.checked, skillsList[conditionData.value].name] } catch (e) { return }
            break
        case "OBJECT":
            json.condition = optionCondition.value
            try { json.conditionData = [conditionIsHere.checked, objectsJson[conditionData.value].type, objectsJson[conditionData.value].name] } catch (e) { return }
            break
        default:
            break
    }

    // ===== EFFECT =====
    switch (optionEffect.value) {
        case "REMOVE_OBJECT":
        case "ADD_OBJECT":
            json.effect = optionEffect.value
            try { json.effectData = [objectsJson[effectData.value].type, objectsJson[effectData.value].name] } catch (e) { return }
            break
        case "MEAL":
        case "STAMINA":
        case "ABILITY":
        case "LIFE":
            json.effect = optionEffect.value
            json.effectData = [parseInt(effectData.value)]
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
        if (buttonList[button].goToIndex == undefined) { liste.innerHTML += '<tr><td>' + button + '</td><td>' + buttonList[button].text + '</td><td>Next</td></tr>' } else { liste.innerHTML += '<tr><td>' + button + '</td><td>' + buttonList[button].text + '</td><td>' + buttonList[button].goToIndex + '</td></tr>' }
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
}
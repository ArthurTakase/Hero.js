var dialogIDGlobal = 0
var dialogList = []

const selectCondition = {
    "No Condition": '<select name="optionCondition" id="optionCondition" onchange="appendCondition()"><option selected>No Condition</option><option>GOLD</option><option>MEAL</option><option>STAMINA</option><option>ABILITY</option><option>SKILL</option><option>OBJECT</option></select>',
    "GOLD": '<select name="optionCondition" id="optionCondition" onchange="appendCondition()"><option>No Condition</option><option selected>GOLD</option><option>MEAL</option><option>STAMINA</option><option>ABILITY</option><option>SKILL</option><option>OBJECT</option></select>',
    "MEAL": '<select name="optionCondition" id="optionCondition" onchange="appendCondition()"><option>No Condition</option><option>GOLD</option><option selected>MEAL</option><option>STAMINA</option><option>ABILITY</option><option>SKILL</option><option>OBJECT</option></select>',
    "STAMINA": '<select name="optionCondition" id="optionCondition" onchange="appendCondition()"><option>No Condition</option><option>GOLD</option><option>MEAL</option><option selected>STAMINA</option><option>ABILITY</option><option>SKILL</option><option>OBJECT</option></select>',
    "ABILITY": '<select name="optionCondition" id="optionCondition" onchange="appendCondition()"><option>No Condition</option><option>GOLD</option><option>MEAL</option><option>STAMINA</option><option selected>ABILITY</option><option>SKILL</option><option>OBJECT</option></select>',
    "SKILL": '<select name="optionCondition" id="optionCondition" onchange="appendCondition()"><option>No Condition</option><option>GOLD</option><option>MEAL</option><option>STAMINA</option><option>ABILITY</option><option selected>SKILL</option><option>OBJECT</option></select>',
    "OBJECT": '<select name="optionCondition" id="optionCondition" onchange="appendCondition()"><option>No Condition</option><option>GOLD</option><option>MEAL</option><option>STAMINA</option><option>ABILITY</option><option>SKILL</option><option selected>OBJECT</option></select>'
}

const selectEffect = {
    "No Effect": '<select name="optionEffect" id="optionEffect" onchange="appendEffect()"><option selected>No Effect</option><option>REMOVE_OBJECT</option><option>ADD_OBJECT</option><option>GOLD</option><option>MEAL</option><option>STAMINA</option><option>ABILITY</option><option>LIFE</option><option>RESTART</option></select>',
    "REMOVE_OBJECT": '<select name="optionEffect" id="optionEffect" onchange="appendEffect()"><option>No Effect</option><option selected>REMOVE_OBJECT</option><option>ADD_OBJECT</option><option>GOLD</option><option>MEAL</option><option>STAMINA</option><option>ABILITY</option><option>LIFE</option><option>RESTART</option></select>',
    "ADD_OBJECT": '<select name="optionEffect" id="optionEffect" onchange="appendEffect()"><option>No Effect</option><option>REMOVE_OBJECT</option><option selected>ADD_OBJECT</option><option>GOLD</option><option>MEAL</option><option>STAMINA</option><option>ABILITY</option><option>LIFE</option><option>RESTART</option></select>',
    "GOLD": '<select name="optionEffect" id="optionEffect" onchange="appendEffect()"><option>No Effect</option><option>REMOVE_OBJECT</option><option>ADD_OBJECT</option><option selected>GOLD</option><option>MEAL</option><option>STAMINA</option><option>ABILITY</option><option>LIFE</option><option>RESTART</option></select>',
    "MEAL": '<select name="optionEffect" id="optionEffect" onchange="appendEffect()"><option>No Effect</option><option>REMOVE_OBJECT</option><option>ADD_OBJECT</option><option>GOLD</option><option selected>MEAL</option><option>STAMINA</option><option>ABILITY</option><option>LIFE</option><option>RESTART</option></select>',
    "STAMINA": '<select name="optionEffect" id="optionEffect" onchange="appendEffect()"><option>No Effect</option><option>REMOVE_OBJECT</option><option>ADD_OBJECT</option><option>GOLD</option><option>MEAL</option><option selected>STAMINA</option><option>ABILITY</option><option>LIFE</option><option>RESTART</option></select>',
    "ABILITY": '<select name="optionEffect" id="optionEffect" onchange="appendEffect()"><option>No Effect</option><option>REMOVE_OBJECT</option><option>ADD_OBJECT</option><option>GOLD</option><option>MEAL</option><option>STAMINA</option><option selected>ABILITY</option><option>LIFE</option><option>RESTART</option></select>',
    "LIFE": '<select name="optionEffect" id="optionEffect" onchange="appendEffect()"><option>No Effect</option><option>REMOVE_OBJECT</option><option>ADD_OBJECT</option><option>GOLD</option><option>MEAL</option><option>STAMINA</option><option>ABILITY</option><option selected>LIFE</option><option>RESTART</option></select>',
    "RESTART": '<select name="optionEffect" id="optionEffect" onchange="appendEffect()"><option>No Effect</option><option>REMOVE_OBJECT</option><option>ADD_OBJECT</option><option>GOLD</option><option>MEAL</option><option>STAMINA</option><option>ABILITY</option><option>LIFE</option><option selected>RESTART</option></select>',
}

function appendCondition() {
    const conditionZone = document.getElementById('optionConditionZone')
    var conditionSelect = document.getElementById('optionCondition')

    conditionZone.innerHTML = selectCondition[conditionSelect.value]

    switch (conditionSelect.value) {
        case "No Condition":
            break
        case "GOLD":
        case "MEAL":
        case "STAMINA":
        case "ABILITY":
            conditionZone.innerHTML += '<input type="number" name="conditionValue" id="conditionValue" placeholder="Condition Value" title="Condition Value">'
            break
        case "SKILL":
            conditionZone.innerHTML += '<select name="conditionValue" id="conditionValue" title="Condition Value"></select>\
                                        <div class="data check full-length">\
                                            <input type="checkbox" name="conditionIsHere" id="conditionIsHere" required checked>\
                                            <label for="conditionIsHere">Has ?</label>\
                                        </div>'
            updateSkills()
            break
        case "OBJECT":
            conditionZone.innerHTML += '<select name="conditionValue" id="conditionValue" title="Condition Value"></select>\
                                        <div class="data check full-length">\
                                            <input type="checkbox" name="conditionIsHere" id="conditionIsHere" required checked>\
                                            <label for="conditionIsHere">Has ?</label>\
                                        </div>'
            updateObjects()
            break
    }
}

function appendEffect() {
    const effectZone = document.getElementById('optionEffectZone')
    const effectSelect = document.getElementById('optionEffect')

    effectZone.innerHTML = selectEffect[effectSelect.value]

    switch (effectSelect.value) {
        case "REMOVE_OBJECT":
        case "ADD_OBJECT":
            effectZone.innerHTML += '<select name="effectValue" id="effectValue" title="Effect Value"></select>'
            updateObjects()
            break
        case "MEAL":
        case "STAMINA":
        case "ABILITY":
        case "LIFE":
        case "GOLD":
            effectZone.innerHTML += '<input type="number" name="effectValue" id="effectValue" placeholder="Effect Value" title="Effect Value">'
            break
        case "RESTART":
        case "No Effect":
            break
    }
}

function addDialogFromJSON(element) {
    var dialogId = document.getElementById('dialogID')
        // ===== SAVE =====
    dialogList.push(element)
    dialogIDGlobal += 1

    // ===== RESET =====
    dialogId.value = dialogIDGlobal
}

function addDialog() {
    const optionListe = document.getElementById('optionsList')
    const optionID = document.getElementById('optionID')
    var dialogId = document.getElementById('dialogID')
    var dialogTitle = document.getElementById('dialogTitle')
    var dialogBody = document.getElementById('dialogBody')
    var dialogAction = document.getElementById('dialogAction')
    var dialogMusic = document.getElementById('dialogMusic')
    var dialogBackground = document.getElementById('dialogBackground')
    var dialogPicture = document.getElementById('dialogImage')
    var dialogAnimation = document.getElementById('dialogAnimation')
    var json = {}

    // ===== GENERATE =====
    if (dialogTitle.value != "") { json.title = dialogTitle.value }
    if (dialogBody.value != "") { json.body = dialogBody.value }
    if (dialogAction.value != "") { json.action = dialogAction.value }
    if (dialogMusic.value != "No Music") { json.music = soundJson[dialogMusic.value] }
    if (buttonList.length != 0) { json.buttons = buttonList }
    if (dialogPicture.value != "No Picture") { json.img = dialogPicture.value }
    if (dialogBackground.value != "No Background") { json.background = dialogBackground.value }
    if (dialogAnimation.value != "No Animation") { json.animation = dialogAnimation.value }

    // ===== SAVE =====
    if (parseInt(dialogId.value) != dialogIDGlobal) { dialogList[parseInt(dialogId.value)] = json } else {
        dialogList.push(json);
        dialogIDGlobal += 1
    }

    // ===== RESET =====
    dialogId.value = dialogIDGlobal
    dialogTitle.value = ""
    dialogBody.value = ""
    dialogAction.value = ""
    dialogMusic.value = "No Music"
    dialogBackground.value = "No Background"
    dialogPicture.value = "No Picture"
    dialogAnimation.value = "No Animation"
    dialogTitle.focus()

    // ===== RESET BUTTON =====
    buttonList = []
    optionIDGlobal = 0
    optionListe.classList.remove('table')
    optionListe.innerHTML = ""
    optionID.value = optionIDGlobal
}

function updateDialogList() {
    const zone = document.getElementById('dialog-list')

    if (dialogList.length == 0) {
        zone.innerHTML = '<div class="sub_container"><div id="preview" style="display: none;"></div><div class="sub_container_title">List</div>You didn\'t write any dialogue yet.</div>'
        return
    }

    zone.innerHTML = '<div class="sub_container"><div id="preview" style="display: none;"></div><div class="sub_container_title">List</div><table id="dialogList" style="margin-top: 0;"></table></div>'

    var liste = document.getElementById('dialogList')
    liste.classList.add('table')
    liste.innerHTML = '<tr class="tableHeader"><th>ID</th><th>Title</th><th>Body</th></tr>'

    for (dialog in dialogList) {
        liste.innerHTML += '<tr class="preview-button ' + editValue + ' ' + editValueDialog + '" onclick="preview(\'preview\', ' + dialog + ')"><td>' +
            dialog +
            '</td><td>' +
            dialogList[dialog].title +
            '</td><td>' +
            dialogList[dialog].body +
            '</td></tr>'
    }
}
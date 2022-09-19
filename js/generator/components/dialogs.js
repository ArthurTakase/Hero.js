var dialogIDGlobal = 0
var dialogList = []

function appendCondition() {
    const conditionZone = document.getElementById('optionConditionZone')
    var conditionSelect = document.getElementById('optionCondition')
    var element = conditionSelect.value

    var conditionSelectCopy = conditionSelect.outerHTML
    conditionSelectCopy = conditionSelectCopy.replace('<option selected="">', '<option>')
    conditionSelectCopy = conditionSelectCopy.replace(`<option>${element}</option>`, `<option selected>${element}</option>`)

    conditionZone.innerHTML = `<div class="grid-title">Condition</div>${conditionSelectCopy}`

    switch (element) {
        case "No Condition":
            break
        case "GOLD":
        case "EXTRA":
        case "STAMINA":
        case "ABILITY":
            conditionZone.innerHTML += '<input type="number" name="conditionValue" id="conditionValue" placeholder="Condition Value" title="Condition Value" class="advanced">'
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
        case "INPUT":
            conditionZone.innerHTML += '<input type="text" name="conditionValue" id="conditionValue" placeholder="Input Answer" title="Input Answer" class="advanced">'

    }
}

function appendEffect() {
    const effectZone = document.getElementById('optionEffectZone')
    const effectSelect = document.getElementById('optionEffect')
    var element = effectSelect.value

    var effectSelectCopy = effectSelect.outerHTML
    effectSelectCopy = effectSelectCopy.replace('<option selected="">', '<option>')
    effectSelectCopy = effectSelectCopy.replace(`<option>${element}</option>`, `<option selected>${element}</option>`)

    effectZone.innerHTML = `<div class="grid-title">Effect</div>${effectSelectCopy}`

    switch (element) {
        case "REMOVE_OBJECT":
        case "ADD_OBJECT":
            effectZone.innerHTML += '<select name="effectValue" id="effectValue" title="Effect Value"></select>'
            updateObjects()
            break
        case "EXTRA":
        case "STAMINA":
        case "ABILITY":
        case "LIFE":
        case "GOLD":
            effectZone.innerHTML += '<input type="number" name="effectValue" id="effectValue" placeholder="Effect Value" title="Effect Value" class="advanced" >'
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
    if (dialogMusic.value != "No Music") { json.music = dialogMusic.value }
    if (buttonList.length != 0) { json.buttons = buttonList }
    if (dialogPicture.value != "No Picture") { json.img = dialogPicture.value }
    if (dialogBackground.value != "No Background") { json.background = dialogBackground.value }
    if (dialogAnimation.value != "No Animation") { json.animation = dialogAnimation.value }

    // ===== SAVE =====
    createNotif("Dialog " + dialogId.value + " saved.", "<i class='bx bx-save'></i> Info")
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
    Instantpreview()
}

function updateDialogList() {
    const zone = document.getElementById('dialog-list')

    if (dialogList.length == 0) {
        zone.innerHTML = '<div class="sub_container"><div id="preview" style="display: none;"></div>\
                            <a href="https://www.notion.so/D-tails-de-l-interface-de-cr-ation-c8542e3a1a624e979badac7de1285f8b#060e8b2e69884b04ab0f28cd403ea735" target="_blank" class="help"><i class="bx bx-help-circle"></i> Help</a>\
                            <div class="sub_container_title">List</div>You didn\'t write any dialogue yet.</div>'
        return
    }

    zone.innerHTML = '<div class="sub_container"><div id="preview" style="display: none;"></div>\
    <a href="https://www.notion.so/D-tails-de-l-interface-de-cr-ation-c8542e3a1a624e979badac7de1285f8b#060e8b2e69884b04ab0f28cd403ea735" target="_blank" class="help"><i class="bx bx-help-circle"></i> Help</a>\
    <div class="sub_container_title">List</div><table id="dialogList" style="margin-top: 0;"></table></div>'

    var liste = document.getElementById('dialogList')
    liste.classList.add('table')
    liste.innerHTML = '<tr class="tableHeader"><th>ID</th><th>Title</th><th>Body</th></tr>'

    for (dialog in dialogList) {
        liste.innerHTML += `<tr class="preview-button ${editValue} ${editValueDialog}" onclick="preview(\'preview\', ${dialog})">
                            <td>${dialog}</td><td>${dialogList[dialog].title}</td><td>${dialogList[dialog].body}</td></tr>`
    }
}
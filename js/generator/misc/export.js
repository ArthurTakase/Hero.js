let error = false

function isnum(val) { return /^\d+$/.test(val) }

function exportJSON(data) {
    var temp = data
    data = JSON.stringify(data)
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
    element.setAttribute('download', temp.gameInfos.title + ".hero");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function data() {
    var json = {}

    json.pictures = pictureJson
    json.sounds = soundJson

    const css = document.getElementById("customCSS")
    json.css = css.value

    return json
}

function gameInfos() {
    var json = {}
    const maxDice = document.getElementById("maxDice")
    const defeatNumber = document.getElementById("defeatNumber")
    const maxSkills = document.getElementById("maxSkills")
    const startNumber = document.getElementById("startNumber")
    const startPicture = document.getElementById("startPicture")
    const startBackground = document.getElementById("startBackground")
    const startAuthor = document.getElementById("startAuthor")
    const startLanguage = document.getElementById("startLanguage")
    const startSynopsis = document.getElementById("startSynopsis")

    json.title = document.getElementById("title").value
    if (defeatNumber.value != "") { json.defeatNumber = parseInt(defeatNumber.value) }
    if (maxDice.value != "") { json.maxDice = parseInt(maxDice.value) }
    if (maxSkills.value != "") { json.maxSkills = parseInt(maxSkills.value) }
    if (startNumber.value != "") { json.startNumber = parseInt(startNumber.value) }
    json.showPlayerAbility = document.querySelector('#showPlayerAbility').checked;
    json.showPlayerStamina = document.querySelector('#showPlayerStamina').checked;
    json.showPlayerSkills = document.querySelector('#showPlayerSkills').checked;
    json.showPlayerGold = document.querySelector('#showPlayerGold').checked;
    json.showPlayerInventory = document.querySelector('#showPlayerInventory').checked;

    json.previewPicture = startPicture.value
    json.previewBackground = startBackground.value
    json.previewAuthor = startAuthor.value
    json.previewLanguage = startLanguage.value
    json.previewSynopsis = startSynopsis.value
    json.previewDate = new Date().toLocaleDateString("fr")

    return json
}

function gameplay() {
    var json = {}
    var objectsList = []
    var skillsList = []

    for (skill in skillsJson) { skillsList.push(skillsJson[skill]) }
    json.skills = skillsList

    for (object in objectsJson) {
        objectsList.push(objectsJson[object])
    }
    json.objectsInventory = objectsList

    return json
}

function player() {
    const ability = document.getElementById('playerAbility')
    const stamina = document.getElementById('playerStamina')
    const extra = document.getElementById('playerExtra')
    const gold = document.getElementById('playerGold')
    var json = {}

    json.skills = []
    json.inventory = []

    if (ability.value == "") ability.value = 0
    if (stamina.value == "") stamina.value = 0
    if (extra.value == "") extra.value = 0
    if (gold.value == "") gold.value = 0

    json.ability = (isnum(ability.value)) ? parseInt(ability.value) : (ability.value.includes("RANDOM")) ? ability.value : "Error"
    json.stamina = (isnum(stamina.value)) ? parseInt(stamina.value) : (stamina.value.includes("RANDOM")) ? stamina.value : "Error"
    json.extra = (isnum(extra.value)) ? parseInt(extra.value) : (extra.value.includes("RANDOM")) ? extra.value : "Error"
    json.gold = (isnum(gold.value)) ? parseInt(gold.value) : (gold.value.includes("RANDOM")) ? gold.value : "Error"

    if (json.ability == "Error" || json.stamina == "Error" || json.extra == "Error" || json.gold == "Error") {
        createNotif("Bad value in Advanced Mode (Player)", "<i class='bx bx-bug'></i> Warning !")
        error = true
    }

    for (skill in playerSkills) { json.skills.push(playerSkills[skill]) }
    for (object in playerObjects) { json.inventory.push(playerObjects[object]) }

    return json
}

function getcolor() {
    var colorList = []

    for (c in colorJson) { colorList.push([c, colorJson[c]]) }

    return colorList
}

function createNotif(text, title) {
    var notif = document.getElementById('notif-zone')

    notif.innerHTML = `<div class="hero-js-notification"><div class="notif-title">${title}</div><div class="notif-body">${text}</div></div>`
}

function checkJSON(json) {
    if (error) { return false }
    if (!json.gameInfos.title) {
        createNotif("No Game Title", "<i class='bx bx-bug'></i> Warning !")
        return false
    }
    if (json.gameInfos.startNumber == undefined) {
        createNotif("No Start Number", "<i class='bx bx-bug'></i> Warning !")
        return false
    }
    if (!json.gameInfos.previewPicture) {
        createNotif("No Game Cover", "<i class='bx bx-bug'></i> Warning !")
        return false
    }
    if (!json.gameInfos.previewBackground) {
        createNotif("No Game Illustration", "<i class='bx bx-bug'></i> Warning !")
        return false
    }
    if (!json.gameInfos.previewAuthor) {
        createNotif("No Game Author", "<i class='bx bx-bug'></i> Warning !")
        return false
    }
    if (!json.gameInfos.previewLanguage) {
        createNotif("No Game Language", "<i class='bx bx-bug'></i> Warning !")
        return false
    }
    if (!json.gameInfos.previewSynopsis) {
        createNotif("No Game Synopsis", "<i class='bx bx-bug'></i> Warning !")
        return false
    }

    return true
}

function createJSON() {
    var json = {}

    json.data = data()
    json.gameInfos = gameInfos()
    json.gameplay = gameplay()
    if (isPlayer) { json.player = player() }
    json.color = getcolor()
    json.dialogs = dialogList

    return json
}

function submit() {
    var json = createJSON()

    if (checkJSON(json)) { exportJSON(json) }
}
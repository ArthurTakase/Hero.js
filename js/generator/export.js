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

    return json
}

function gameInfos() {
    var json = {}
    const maxDice = document.getElementById("maxDice")
    const defeatNumber = document.getElementById("defeatNumber")
    const maxSkills = document.getElementById("maxSkills")
    const startNumber = document.getElementById("startNumber")

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

    return json
}

function gameplay() {
    var json = {}
    var objectsList = []
    var specialList = []
    var skillsList = []

    for (skill in skillsJson) { skillsList.push(skillsJson[skill]) }
    json.skills = skillsList

    for (object in objectsJson) {
        if (objectsJson[object].type == "special") { specialList.push(objectsJson[object]) } else { objectsList.push(objectsJson[object]) }
    }
    json.objectsInventory = objectsList
    json.objectsSpecial = specialList

    return json
}

function player() {
    const ability = document.getElementById('playerAbility')
    const stamina = document.getElementById('playerStamina')
    const meal = document.getElementById('playerMeal')
    const gold = document.getElementById('playerGold')
    var json = {}

    json.skills = []
    json.inventory = []
    json.special = []
    json.ability = parseInt(ability.value)
    json.stamina = parseInt(stamina.value)
    json.meal = parseInt(meal.value)
    json.gold = parseInt(gold.value)

    for (skill in playerSkills) { json.skills.push(playerSkills[skill]) }
    for (object in playerObjects) {
        if (playerObjects[object].type == 'special') { json.special.push(playerObjects[object]) } else { json.inventory.push(playerObjects[object]) }
    }

    return json
}

function getcolor() {
    var colorList = []

    for (c in colorJson) { colorList.push([c, colorJson[c]]) }

    return colorList
}

function createNotif(text) {
    var notif = document.getElementById('notif-zone')

    notif.innerHTML = '<div class="hero-js-notification">\
    <div class="notif-title"><i class="bx bx-bug"></i> Warning !</div><div class="notif-body">' + text + '</div></div>'
}

function checkJSON(json) {
    console.log(json.gameInfos.title)
    if (json.gameInfos.title == undefined || json.gameInfos.title == "") {
        createNotif("No Game Title")
        return false
    }
    if (json.gameInfos.startNumber == undefined) {
        createNotif("No Start Number")
        return false
    }

    return true
}

function submit() {
    var json = {}

    json.data = data()
    json.gameInfos = gameInfos()
    json.gameplay = gameplay()
    if (isPlayer) { json.player = player() }
    json.color = getcolor()
    json.dialogs = dialogList

    if (checkJSON(json)) { exportJSON(json) }
}
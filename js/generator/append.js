let skillsList = []
let objectsList = []
let specialList = []
let colorList = []
let pictureJSON = {}
let soundJSON = {}
let playerSkills = []
let playerInventory = []

function addSkill() {
    var skillName = document.getElementById('skillName').value
    var skillAbility = document.getElementById('skillAbility').value
    var skillStamina = document.getElementById('skillStamina').value
    var json = {}

    if (skillAbility == "" || skillName == "" || skillStamina == "") {return}

    json.name = skillName
    json.stats = [parseInt(skillAbility), parseInt(skillStamina)]
    skillsList.push(json)

    const liste = document.getElementById('skillsList')

    if (skillsList.length == 1) {
        liste.style.background = '#40424b'
        liste.style.margin = '1rem'
        liste.innerHTML += '<tr class="tableHeader"><th>Name</th><th>Ability</th><th>Stamina</th></tr>'
    }

    liste.innerHTML += '<tr><td>' + skillName + '</td><td>' + skillAbility + '</td><td>' + skillStamina + '</td></tr>'
    
    // Reset des valeurs de l'input
    document.getElementById('skillName').value = ""
    document.getElementById('skillAbility').value = ""
    document.getElementById('skillStamina').value = ""

    document.getElementById('skillName').focus()

    try {document.getElementById('playerSkillsList').innerHTML += "<option>" + json.name + "</option>"} catch(e) {}

    // Ajouter dans les listes pour le joueur et les conditions, etc...
}

function addObject() {

    const liste = document.getElementById('objectList')
    var objectName = document.getElementById('objectName')
    var objectType = document.getElementById('objectType')
    var objectAbility = document.getElementById('itemAbility')
    var objectStamina = document.getElementById('itemStamina')
    var objectGold = document.getElementById('itemGold')
    var objectMeal = document.getElementById('itemMeal')
    var json = {}

    if (objectAbility.value == "" || objectGold.value == "" || objectStamina.value == "" ||
        objectMeal.value == "" || objectName.value == "") {return}

    json.name = objectName.value
    json.type = objectType.value
    json.data = [
        parseInt(objectAbility.value),
        parseInt(objectStamina.value),
        parseInt(objectGold.value),
        parseInt(objectMeal.value)
    ]

    
    if (objectsList.length == 0 && specialList.length == 0) {
        liste.style.background = '#40424b'
        liste.style.margin = '1rem'
        liste.innerHTML += '<tr class="tableHeader"><th>Name</th><th>Type</th><th>Ability</th><th>Stamina</th><th>Gold</th><th>Meal</th></tr>'
    }
    
    if (json.type == "special") {specialList.push(json)}
    else if (json.type == "inventory") {objectsList.push(json)}

    liste.innerHTML += '<tr><td>' + objectName.value + '</td><td>' +
                        objectType.value + '</td><td>' +
                        objectAbility.value + '</td><td>' +
                        objectStamina.value + '</td><td>' +
                        objectGold.value + '</td><td>' +
                        objectMeal.value     + '</td></tr>'
    
    // Reset des valeurs de l'input
    objectAbility.value = ""
    objectGold.value = ""
    objectMeal.value = ""
    objectName.value = ""
    objectStamina.value = ""

    objectName.focus()

    try {document.getElementById('playerInventoryList').innerHTML += "<option>" + json.name + "</option>"} catch(e) {}
}

function addColor() {
    const liste = document.getElementById('colorList')
    var elem = document.getElementById('ColorElem')
    var color = document.getElementById('ColorColor')

    if (elem.value == "") {return}

    colorList.push([elem.value, color.value])

    if (colorList.length == 1) {
        liste.style.background = '#40424b'
        liste.style.margin = '1rem'
        liste.innerHTML += '<tr class="tableHeader"><th>Element</th><th>Color</th></tr>'
    }

    liste.innerHTML += '<tr><td>' + elem.value + '</td><td style="background:' + color.value + ';"></td></tr>'
}

function addPicture() {
    const liste = document.getElementById('pictureList')    
    var pictureName = document.getElementById('pictureName')
    var pictureURL = document.getElementById('pictureURL')

    if (pictureName.value == "" || pictureURL == "") {return}

    if (Object.keys(pictureJSON).length == 0) {
        liste.style.background = '#40424b'
        liste.style.margin = '1rem'
        liste.innerHTML += '<tr class="tableHeader"><th>Name</th><th>Preview</th></tr>'
    }
    
    liste.innerHTML += '<tr><td>' + pictureName.value + '</td><td><img src="' + pictureURL.value + '"></td></tr>'
    
    pictureJSON[pictureName.value] = pictureURL.value

    pictureName.value = ""
    pictureURL.value = ""

    pictureName.focus()
}

function addSound() {

    const liste = document.getElementById('soundList')
    var soundName = document.getElementById('soundName')
    var soundURL = document.getElementById('soundURL')
    var soundVolume = document.getElementById('soundVolume')

    if (soundName.value == "" || soundURL.value == "" || soundVolume.value == "") {return}

    if (Object.keys(soundJSON).length == 0) {
        liste.style.background = '#40424b'
        liste.style.margin = '1rem'
        liste.innerHTML += '<tr class="tableHeader"><th>Name</th><th>Preview</th><th>Volume</th></tr>'
    }
    
    liste.innerHTML += '<tr><td>' +
                        soundName.value +
                        '</td><td><audio controls src="' +
                        soundURL.value +
                        '"></audio></td><td>' +
                        parseInt(soundVolume.value) / 100
                        + '</td></tr>'

    
    soundName.value = ""
    soundURL.value = ""
    soundVolume.value = 50

    soundName.focus()

    console.log(soundName.value, soundURL.value, soundVolume.value)
}

function generatePlayer() {
    const section = document.getElementById('player')

    var skillsListOption = ""
    for (skill in skillsList) {skillsListOption += "<option>" + skillsList[skill].name + "</option>"}

    var objectListOption = ""
    for (object in specialList) {objectListOption += "<option>" + specialList[object].name + "</option>"}
    for (object in objectsList) {objectListOption += "<option>" + objectsList[object].name + "</option>"}

    section.innerHTML = '<div class="dataform">\
                        <h2>Stats</h2>\
                        <input type="number" name="playerAbility" id="playerAbility" placeholder="Player Ability" title="Player Ability" required>\
                        <input type="number" name="playerStamina" id="playerStamina" placeholder="Player Stamina" title="Player Stamina" required>\
                        <input type="number" name="playerMeal" id="playerMeal" placeholder="Meal" title="Meal" required>\
                        <input type="number" name="playerGold" id="playerGold" placeholder="Gold" title="Gold" required>\
                        <div class="datalist">\
                            <h2>Skills</h2>\
                            <div class="dataAdd">\
                                <select name="playerSkillsList" id="playerSkillsList">' +
                                   skillsListOption +
                                '</select>\
                                <button class="add" onclick="addPlayerSkill()"><i class="bx bx-check" ></i></button>\
                            </div>\
                            <table id="playerSkillsListTable"></table>\
                        </div>\
                        <div class="datalist">\
                            <h2>Inventory</h2>\
                            <div class="dataAdd">\
                                <select name="playerInventoryList" id="playerInventoryList">' +
                                   objectListOption +
                                '</select>\
                                <button class="add" onclick="addPlayerInventory()"><i class="bx bx-check" ></i></button>\
                            </div>\
                            <table id="playerInventoryListTable"></table>\
                        </div>\
                    </div>'
}

function addPlayerSkill() {
    var skill = document.getElementById('playerSkillsList')
    const liste = document.getElementById('playerSkillsListTable')

    if (skill.value == "") {return}

    playerSkills.push(skill.value)

    if (playerSkills.length == 1) {
        liste.style.background = '#40424b'
        liste.style.margin = '1rem'
        liste.innerHTML += '<tr class="tableHeader"><th>Name</th></tr>'
    }

    liste.innerHTML += '<tr><td>' +
                        skill.value +
                        '</td></tr>'

    skill.focus()
}

function addPlayerInventory() {
    var item = document.getElementById('playerInventoryList')
    const liste = document.getElementById('playerInventoryListTable')

    if (item.value == "") {return}

    playerInventory.push(item.value)

    if (playerInventory.length == 1) {
        liste.style.background = '#40424b'
        liste.style.margin = '1rem'
        liste.innerHTML += '<tr class="tableHeader"><th>Name</th></tr>'
    }

    liste.innerHTML += '<tr><td>' +
                        item.value +
                        '</td></tr>'

    item.focus()
}
let skillsList = []
let objectsList = []
let specialList = []
let colorList = []
let pictureJSON = {}
let soundJSON = {}
let playerSkills = []
let playerInventory = []
let dialogIDGolbal = 0
let optionIDGlobal = 0
let isPlayer = false
let dialogList = []
let buttonList = []

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

    try {document.getElementById('dialogBackground').innerHTML += "<option>" + pictureName.value + "</option>"} catch(e) {}
    try {document.getElementById('dialogImage').innerHTML += "<option>" + pictureName.value + "</option>"} catch(e) {}

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
    
    soundJSON[soundName.value] = [soundURL.value, parseInt(soundVolume.value) / 100]

    liste.innerHTML += '<tr><td>' +
                        soundName.value +
                        '</td><td><audio controls src="' +
                        soundURL.value +
                        '"></audio></td><td>' +
                        parseInt(soundVolume.value) / 100
                        + '</td></tr>'

    try {document.getElementById('optionSound').innerHTML += "<option>" + soundName.value + "</option>"} catch(e) {}
    try {document.getElementById('dialogMusic').innerHTML += "<option>" + soundName.value + "</option>"} catch(e) {}
    
    soundName.value = ""
    soundURL.value = ""
    soundVolume.value = 50

    soundName.focus()

}

function generatePlayer() {
    const section = document.getElementById('player')
    isPlayer = true

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

function addOption() {
    var optionID = document.getElementById('optionID')
    var optionBody = document.getElementById('optionBody')
    var optionGoTo = document.getElementById('optionGoToIndex')
    var optionSound = document.getElementById('optionSound')
    var optionCondition = document.getElementById('optionCondition')
    var optionEffect = document.getElementById('optionEffect')
    var json = {}
    const liste = document.getElementById('optionsList')

    json.text = optionBody.value
    if (optionGoTo.value != "") {json.goToIndex = parseInt(optionGoTo.value)}
    if (optionSound.value != "No Sound") {json.sound = soundJSON[optionSound.value]}

    switch (optionCondition.value) {
        case "GOLD": case "MEAL": case "STAMINA": case "ABILITY":
            var conditionDataNumber = document.getElementById('conditionValue')
            json.condition = optionCondition.value
            json.conditionData = [true, parseInt(conditionDataNumber.value)]
            break
        case "SKILL":
            var conditionDataObject = document.getElementById('conditionValue')
            json.condition = optionCondition.value

            for (skill in skillsList) {
                if (skillsList[skill].name == conditionDataObject.value) {
                    json.conditionData = [
                        document.querySelector('#conditionIsHere').checked,
                        skillsList[skill].name
                    ]
                    break
                }
            }
            break
        case "OBJECT":
            var conditionDataObject = document.getElementById('conditionValue')
            json.condition = optionCondition.value

            for (object in objectsList) {
                if (objectsList[object].name == conditionDataObject.value) {
                    json.conditionData = [
                        document.querySelector('#conditionIsHere').checked,
                        objectsList[object].type,
                        objectsList[object].name
                    ]
                    break
                }
            }
            if (json.conditionData == undefined) {
                for (object in specialList) {
                    if (specialList[object].name == conditionDataObject.value) {
                        json.conditionData = [
                            document.querySelector('#conditionIsHere').checked,
                            specialList[object].type,
                            specialList[object].name
                        ]
                        break
                    }
                }
            }
            break
        default: break
    }

    switch (optionEffect.value) {
        case "REMOVE_OBJECT": case "ADD_OBJECT":
            var optionEffectObject = document.getElementById('effectValue')
            json.effect = optionEffect.value

            for (object in objectsList) {
                if (objectsList[object].name == optionEffectObject.value) {
                    json.effectData = [objectsList[object].type, objectsList[object].name]
                    break
                }
            }
            if (json.effectData == undefined) {
                for (object in specialList) {
                    if (specialList[object].name == optionEffectObject.value) {
                        json.effectData = [specialList[object].type, specialList[object].name]
                        break
                    }
                }
            }
            break
        case "MEAL": case "STAMINA": case "ABILITY": case "LIFE":
            var optionEffectValue = document.getElementById('effectValue')
            json.effect = optionEffect.value
            json.effectData = [parseInt(optionEffectValue.value)]
            break
        case "RESTART":
            var optionEffectValue = document.getElementById('effectValue')
            json.effect = optionEffect.value
        default: break
    }

    if (parseInt(optionID.value) != optionIDGlobal) {buttonList[parseInt(optionID.value)] = json}
    else {
        buttonList.push(json)
        optionIDGlobal += 1
    }

    liste.style.background = '#40424b'
    liste.style.margin = '1rem'
    liste.innerHTML = '<tr class="tableHeader"><th>ID</th><th>Text</th><th>Go To</th></tr>'

    for (button in buttonList) {
        if (buttonList[button].goToIndex == undefined) {
            liste.innerHTML += '<tr><td>' + button + '</td><td>' + buttonList[button].text + '</td><td>Next Dialog</td></tr>'
        } else {
            liste.innerHTML += '<tr><td>' + button + '</td><td>' + buttonList[button].text + '</td><td>' + buttonList[button].goToIndex + '</td></tr>'
        }
    }

    document.getElementById('dialogOption').innerHTML = '<div class="grid-2 option-grid-2">\
                                                            <input type="number" name="optionID" id="optionID" placeholder="Option ID" title="Option ID" value="' + optionIDGlobal + '">\
                                                            <input type="text" name="optionBody" id="optionBody" placeholder="Option Body" title="Option Body">\
                                                        </div>\
                                                        <div class="grid-2">\
                                                            <input type="number" name="optionGoToIndex" id="optionGoToIndex" placeholder="Go to Index (not required)" title="Go to Index (not required)">\
                                                            <select name="optionSound" id="optionSound">\
                                                                <option>No Sound</option>\
                                                            </select>\
                                                        </div>\
                                                        <div id="optionConditionZone">\
                                                            <select name="optionCondition" id="optionCondition" onchange="appendCondition()">\
                                                                <option>No Condition</option>\
                                                                <option>GOLD</option>\
                                                                <option>MEAL</option>\
                                                                <option>STAMINA</option>\
                                                                <option>ABILITY</option>\
                                                                <option>SKILL</option>\
                                                                <option>OBJECT</option>\
                                                            </select>\
                                                        </div>\
                                                        <div id="optionEffectZone">\
                                                            <select name="optionEffect" id="optionEffect" onchange="appendEffect()">\
                                                                <option>No Effect</option>\
                                                                <option>REMOVE_OBJECT</option>\
                                                                <option>ADD_OBJECT</option>\
                                                                <option>MEAL</option>\
                                                                <option>STAMINA</option>\
                                                                <option>ABILITY</option>\
                                                                <option>LIFE</option>\
                                                                <option>RESTART</option>\
                                                            </select>\
                                                        </div>\
                                                        <button class="add" onclick="addOption()"><i class="bx bx-plus"></i></button>'
    
    document.getElementById('optionBody').focus()
}

function addDialog() {
    var dialogId = document.getElementById('dialogID')
    var dialogTitle = document.getElementById('dialogTitle')
    var dialogBody = document.getElementById('dialogBody')
    var dialogAction = document.getElementById('dialogAction')
    var dialogMusic = document.getElementById('dialogMusic')
    var dialogBackground = document.getElementById('dialogBackground')
    var dialogPicture = document.getElementById('dialogImage')
    var dialogAnimation = document.getElementById('dialogAnimation')
    var json = {}

    if (dialogTitle.value != "") {json.title = dialogTitle.value}
    json.body = dialogBody.value
    if (dialogAction.value != "") {json.action = dialogAction.value}
    if (dialogMusic.value != "No Music") {json.music = soundJSON[dialogMusic.value]}
    json.buttons = buttonList
    if (dialogPicture.value != "No Picture") {json.img = pictureJSON[dialogPicture.value]}
    if (dialogBackground.value != "No Background") {json.background = pictureJSON[dialogBackground.value]}
    if (dialogAnimation.value != "No Animation") {json.animation = dialogAnimation.value}

    if (parseInt(dialogId.value) != dialogIDGolbal) {dialogList[parseInt(dialogId.value)] = json}
    else {
        dialogList.push(json)
        dialogIDGolbal += 1
    }

    dialogId.value = dialogIDGolbal
    dialogTitle.value = ""
    dialogBody.value = ""
    dialogAction.value = ""
    dialogMusic.value = "No Music"
    dialogBackground.value = "No Background"
    dialogPicture.value = "No Picture"
    dialogAnimation.value = "No Animation"
    buttonList = []
    document.getElementById('optionsList').innerHTML = ""
    
    document.getElementById('dialogTitle').focus()

    optionIDGlobal = 0
    document.getElementById('optionID').value = optionIDGlobal

    // append au html
}
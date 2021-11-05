let skillsList = []
let objectsList = []
let specialList = []
let colorList = []
let pictureJSON = {}
let soundJSON = {}

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
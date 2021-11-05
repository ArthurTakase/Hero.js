let skillsList = []
let objectsList = []
let specialList = []

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
    objectType.value = ""

    objectName.focus()
}
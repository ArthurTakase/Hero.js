let skillsList = []
let objectsList = []

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

    // Ajouter dans les listes pour le joueur et les conditions, etc...
}

function addObject() {
    console.log("ajout d'un item")
}
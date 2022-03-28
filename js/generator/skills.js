// let skillsList = []
let skillsJson = {}

function addSkill() {
    const liste = document.getElementById('skillsList')
    var skillName = document.getElementById('skillName')
    var skillAbility = document.getElementById('skillAbility')
    var skillStamina = document.getElementById('skillStamina')
    var json = {}

    if (skillAbility.value == "" || skillName.value == "" || skillStamina.value == "") {return}
    if (jsonLen(skillsJson) == 0) {liste.classList.add("table")}
    
    json.name = skillName.value
    json.stats = [parseInt(skillAbility.value), parseInt(skillStamina.value)]
    skillsJson[skillName.value] = json
        
    liste.innerHTML = '<tr class="tableHeader"><th>Name</th><th>Ability</th><th>Stamina</th></tr>'
    for (skill in skillsJson) {
        liste.innerHTML += '<tr><td>' + skillsJson[skill].name + '</td><td>' + skillsJson[skill].stats[0] + '</td><td>' + skillsJson[skill].stats[1]+ '</td></tr>'
    }
    
    // Reset des valeurs de l'input
    skillName.value = ""
    skillAbility.value = ""
    skillStamina.value = ""
    skillName.focus()

    // try {document.getElementById('playerSkillsList').innerHTML += "<option>" + json.name + "</option>"} catch(e) {}
}

function updateSkills() {
    var skillsListOption = ""

    for (skill in skillsJson) {skillsListOption += "<option>" + skill + "</option>"}

    //Ajouter les autres parties à update ici
    const playerList = document.getElementById('playerSkillsList')
    var conditionList = document.getElementById('conditionValue')

    try {playerList.innerHTML = skillsListOption} catch(e) {}
    try {conditionList.innerHTML = skillsListOption} catch(e) {}
}
// let skillsList = []
let skillsJson = {}

function addSkillFromJSON(element) {
    const liste = document.getElementById('skillsList')

    if (jsonLen(skillsJson)) { liste.classList.add("table") }

    skillsJson[element.name] = element

    liste.innerHTML = '<tr class="tableHeader"><th>Name</th><th>Ability</th><th>Stamina</th></tr>'
    for (skill in skillsJson) {
        try {
            liste.innerHTML += '<tr class="' + editValue + ' ' + editValueSkill + '"><td>' + skillsJson[skill].name + '</td><td>' + skillsJson[skill].stats[0] + '</td><td>' + skillsJson[skill].stats[1] + '</td></tr>'
        } catch { continue }
    }
}

function addSkill() {
    const liste = document.getElementById('skillsList')
    var skillName = document.getElementById('skillName')
    var skillAbility = document.getElementById('skillAbility')
    var skillStamina = document.getElementById('skillStamina')
    var json = {}

    if (skillAbility.value == "" || skillName.value == "" || skillStamina.value == "") { return }
    if (jsonLen(skillsJson)) { liste.classList.add("table") }

    json.name = skillName.value
    json.stats = [
        (isnum(skillAbility.value)) ? parseInt(skillAbility.value) : skillAbility.value,
        (isnum(skillStamina.value)) ? parseInt(skillStamina.value) : skillStamina.value
    ]

    skillsJson[skillName.value] = json

    liste.innerHTML = '<tr class="tableHeader"><th>Name</th><th>Ability</th><th>Stamina</th></tr>'
    for (skill in skillsJson) {
        try {
            liste.innerHTML += '<tr class="' + editValue + ' ' + editValueSkill + '"><td>' + skillsJson[skill].name + '</td><td>' + skillsJson[skill].stats[0] + '</td><td>' + skillsJson[skill].stats[1] + '</td></tr>'
        } catch { continue }
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

    for (skill in skillsJson) { skillsListOption += "<option>" + skill + "</option>" }

    //Ajouter les autres parties à update ici
    const playerList = document.getElementById('playerSkillsList')
    var conditionList = document.getElementById('conditionValue')

    try { playerList.innerHTML = skillsListOption } catch (e) {}
    try { conditionList.innerHTML = skillsListOption } catch (e) {}
}
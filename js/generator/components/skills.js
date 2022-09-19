// let skillsList = []
let skillsJson = {}

function updateSkillsList() {
    const liste = document.getElementById('skillsList')
    var lang = localStorage.getItem("lang");
    var name = language[lang]["Name"];
    var abi = language[lang]["ShowAbility"];
    var sta = language[lang]["ShowStamina"];

    if (jsonLen(skillsJson) == 2) {
        liste.innerHTML = ""
        liste.classList.remove("table")
        return
    }
    if (jsonLen(skillsJson) > 0) { liste.classList.add("table") }

    liste.innerHTML = `<tr class="tableHeader"><th id="SkillNameTable">${name}</th><th id="SkillAbilityTable">${abi}</th><th id="SkillStaminaTable">${sta}</th></tr>`
    for (skill in skillsJson) {
        try {
            liste.innerHTML += `<tr class="${editValue} ${editValueSkill}"><td>${skillsJson[skill].name}</td><td>${skillsJson[skill].stats[0]}</td><td>${skillsJson[skill].stats[1]}</td></tr>`
        } catch { continue }
    }
}

function addSkillFromJSON(element) {
    skillsJson[element.name] = element

    updateSkillsList()
}

function addSkill() {
    var skillName = document.getElementById('skillName')
    var skillAbility = document.getElementById('skillAbility')
    var skillStamina = document.getElementById('skillStamina')
    var json = {}

    if (skillAbility.value == "" || skillName.value == "" || skillStamina.value == "") { return }

    json.name = skillName.value
    json.stats = [
        (isnum(skillAbility.value)) ? parseInt(skillAbility.value) : skillAbility.value,
        (isnum(skillStamina.value)) ? parseInt(skillStamina.value) : skillStamina.value
    ]

    skillsJson[skillName.value] = json

    updateSkillsList()

    // Reset des valeurs de l'input
    skillName.value = ""
    skillAbility.value = ""
    skillStamina.value = ""
    skillName.focus()
}

function updateSkills() {
    var skillsListOption = ""

    for (skill in skillsJson) { skillsListOption += `<option>${skill}</option>` }

    //Ajouter les autres parties à update ici
    const playerList = document.getElementById('playerSkillsList')
    var conditionList = document.getElementById('conditionValue')

    try { playerList.innerHTML = skillsListOption } catch (e) {}
    try { conditionList.innerHTML = skillsListOption } catch (e) {}
}
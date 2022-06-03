let isPlayer = false
let playerSkills = {}
let playerObjects = {}

function generatePlayer() {
    const section = document.getElementById('player')
    isPlayer = true
    let type = (advanced) ? 'text' : 'number'

    section.innerHTML = '<div class="sub_container">\
                        <a href="https://www.notion.so/D-tails-de-l-interface-de-cr-ation-c8542e3a1a624e979badac7de1285f8b#d53a7b7b48dc4118864754b212f49d73" target="_blank" class="help"><i class="bx bx-help-circle"></i> Help</a>\
                        <div class="sub_container_title">Stats</div>\
                        <div class="grid-4">\
                            <input type="' + type + '" name="playerAbility" id="playerAbility" placeholder="Player Ability" title="Player Ability" class="advanced" required>\
                            <input type="' + type + '" name="playerStamina" id="playerStamina" placeholder="Player Stamina" title="Player Stamina" class="advanced" required>\
                            <input type="' + type + '" name="playerExtra" id="playerExtra" placeholder="Extra" title="Extra" class="advanced" required>\
                            <input type="' + type + '" name="playerGold" id="playerGold" placeholder="Gold" title="Gold" class="advanced" required>\
                        </div>\
                    </div>\
                    <div class="sub_container">\
                    <a href="https://www.notion.so/D-tails-de-l-interface-de-cr-ation-c8542e3a1a624e979badac7de1285f8b#6dadff79c47b4cd2a6cf1fcc07fec6a9" target="_blank" class="help"><i class="bx bx-help-circle"></i> Help</a>\
                        <div class="sub_container_title">Skills</div>\
                        <div class="grid-4">\
                            <select name="playerSkillsList" id="playerSkillsList">\
                            </select>\
                            <button class="add" onclick="addPlayerSkill()"><i class="bx bx-check" ></i></button>\
                        </div>\
                        <table id="playerSkillsListTable"></table>\
                    </div>\
                    <div class="sub_container">\
                    <a href="https://www.notion.so/D-tails-de-l-interface-de-cr-ation-c8542e3a1a624e979badac7de1285f8b#3fba536c603446279a5dbca934b35752" target="_blank" class="help"><i class="bx bx-help-circle"></i> Help</a>\
                        <div class="sub_container_title">Inventory</div>\
                        <div class="grid-4">\
                            <select name="playerInventoryList" id="playerInventoryList">\
                            </select>\
                            <button class="add" onclick="addPlayerInventory()"><i class="bx bx-check" ></i></button>\
                        </div>\
                        <table id="playerInventoryListTable"></table>\
                    </div>'

    updateSkills()
    updateObjects()
}

function addPlayerSkillFromJSON(element) {
    const liste = document.getElementById('playerSkillsListTable')

    if (jsonLen(playerSkills) == 0) { liste.classList.add("table") }

    playerSkills[element] = element

    liste.innerHTML = '<tr class="tableHeader"><th>Name</th></tr>'
    for (skill in playerSkills) { liste.innerHTML += '<tr class="' + editValue + ' ' + editValuePlayerSkill + '"><td>' + skill + '</td></tr>' }
}

function addPlayerSkill() {
    var skillInput = document.getElementById('playerSkillsList')
    const liste = document.getElementById('playerSkillsListTable')

    if (skillInput.value == "") { return }
    if (jsonLen(playerSkills) == 0) { liste.classList.add("table") }

    playerSkills[skillInput.value] = skillInput.value

    liste.innerHTML = '<tr class="tableHeader"><th>Name</th></tr>'
    for (skill in playerSkills) { liste.innerHTML += '<tr class="' + editValue + ' ' + editValuePlayerSkill + '"><td>' + skill + '</td></tr>' }

    skillInput.focus()
}


function addPlayerInventoryFromJSON(element) {
    const liste = document.getElementById('playerInventoryListTable')

    if (jsonLen(playerObjects) == 0) { liste.classList.add("table") }

    playerObjects[element] = element

    liste.innerHTML = '<tr class="tableHeader"><th>Name</th></tr>'
    for (object in playerObjects) { liste.innerHTML += '<tr class="' + editValue + ' ' + editValuePlayerInv + '"><td>' + playerObjects[object] + '</td></tr>' }
}

function addPlayerInventory() {
    var item = document.getElementById('playerInventoryList')
    const liste = document.getElementById('playerInventoryListTable')

    if (item.value == "") { return }
    if (jsonLen(playerObjects) == 0) { liste.classList.add("table") }

    playerObjects[item.value] = item.value

    liste.innerHTML = '<tr class="tableHeader"><th>Name</th></tr>'
    for (object in playerObjects) { liste.innerHTML += '<tr class="' + editValue + ' ' + editValuePlayerInv + '"><td>' + playerObjects[object] + '</td></tr>' }

    item.focus()
}
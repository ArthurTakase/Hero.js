let isPlayer = false
let playerSkills = {}
let playerObjects = {}

function generatePlayer() {
    const section = document.getElementById('player')
    isPlayer = true

    section.innerHTML = '<div class="sub_container">\
                        <div class="sub_container_title">Stats</div>\
                        <div class="grid-4">\
                            <input type="number" name="playerAbility" id="playerAbility" placeholder="Player Ability" title="Player Ability" required>\
                            <input type="number" name="playerStamina" id="playerStamina" placeholder="Player Stamina" title="Player Stamina" required>\
                            <input type="number" name="playerExtra" id="playerExtra" placeholder="Extra" title="Extra" required>\
                            <input type="number" name="playerGold" id="playerGold" placeholder="Gold" title="Gold" required>\
                        </div>\
                    </div>\
                    <div class="sub_container">\
                        <div class="sub_container_title">Skills</div>\
                        <div class="grid-4">\
                            <select name="playerSkillsList" id="playerSkillsList">\
                            </select>\
                            <button class="add" onclick="addPlayerSkill()"><i class="bx bx-check" ></i></button>\
                        </div>\
                        <table id="playerSkillsListTable"></table>\
                    </div>\
                    <div class="sub_container">\
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
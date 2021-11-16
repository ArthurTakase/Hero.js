let isPlayer = false
let inventoryID = 0
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
                            <input type="number" name="playerMeal" id="playerMeal" placeholder="Meal" title="Meal" required>\
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

function addPlayerSkill() {
    var skillInput = document.getElementById('playerSkillsList')
    const liste = document.getElementById('playerSkillsListTable')

    if (skillInput.value == "") {return}
    if (jsonLen(playerSkills) == 0) {liste.classList.add("table")}
    
    playerSkills[skillInput.value] = skillInput.value

    liste.innerHTML = '<tr class="tableHeader"><th>Name</th></tr>'
    for (skill in playerSkills) {liste.innerHTML += '<tr><td>' + skill + '</td></tr>'}

    skillInput.focus()
}

function addPlayerInventory() {
    var item = document.getElementById('playerInventoryList')
    const liste = document.getElementById('playerInventoryListTable')

    if (item.value == "") {return}
    if (jsonLen(playerObjects) == 0) {liste.classList.add("table")}

    playerObjects[inventoryID] = item.value
    inventoryID += 1
    
    liste.innerHTML = '<tr class="tableHeader"><th>Name</th></tr>'
    for (object in playerObjects) {liste.innerHTML += '<tr><td>' + playerObjects[object] + '</td></tr>'}

    item.focus()
}
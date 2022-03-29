// set input value with json data
function setValueFromJSON(json) {
    const gameTitle = document.getElementById("title")
    const startNumber = document.getElementById("startNumber")
    const defeatNumber = document.getElementById("defeatNumber")
    const maxDice = document.getElementById("maxDice")
    const maxSkills = document.getElementById("maxSkills")
    const showStamina = document.getElementById("showPlayerStamina")
    const showAbility = document.getElementById("showPlayerAbility")
    const showSkills = document.getElementById("showPlayerSkills")
    const showGold = document.getElementById("showPlayerGold")
    const showInventory = document.getElementById("showPlayerInventory")

    // Game Infos - General
    gameTitle.value = json.gameInfos.title
    startNumber.value = json.gameInfos.startNumber
    defeatNumber.value = json.gameInfos.defeatNumber
    maxDice.value = json.gameInfos.maxDice
    maxSkills.value = json.gameInfos.maxSkill

    // Game Infos - Display
    showStamina.checked = json.gameInfos.showPlayerStamina
    showAbility.checked = json.gameInfos.showPlayerAbility
    showSkills.checked = json.gameInfos.showPlayerSkills
    showGold.checked = json.gameInfos.showPlayerGold
    showInventory.checked = json.gameInfos.showPlayerInventory

    // Game Infos - Colors
    if (json.color) {
        json.color.forEach(element => {
            addColorFromJSON(element)
        })
    }

    // Data - Skills
    if (json.gameplay.skills) {
        json.gameplay.skills.forEach(element => {
            addSkillFromJSON(element)
        })
    }

    // Data - Objects
    if (json.gameplay.objectsInventory) {
        json.gameplay.objectsInventory.forEach(element => {
            addObjectFromJSON(element)
        })
    }
    if (json.gameplay.objectsSpecial) {
        json.gameplay.objectsSpecial.forEach(element => {
            addObjectFromJSON(element)
        })
    }

    // Data - Pictures
    if (json.data && json.data.images)
        addPictureFromJSON(json.data.images)

    // Data - Sounds
    if (json.data && json.data.music)
        addSoundFromJSON(json.data.music)

    // Player
    if (json.player) {
        generatePlayer()

        var playerAbility = document.getElementById('playerAbility')
        var playerStamina = document.getElementById('playerStamina')
        var playerMeal = document.getElementById('playerMeal')
        var playerGold = document.getElementById('playerGold')

        // Player - Stats
        playerAbility.value = json.player.ability
        playerStamina.value = json.player.stamina
        playerMeal.value = json.player.meal
        playerGold.value = json.player.gold

        // Player - Skills
        json.player.skills.forEach(element => {
            addPlayerSkillFromJSON(element)
        })

        // Player - Inventory
        json.player.inventory.forEach(element => {
            addPlayerInventoryFromJSON(element)
        })

        // Player - Special
        json.player.special.forEach(element => {
            addPlayerInventoryFromJSON(element)
        })
    }
}

// open JSON file
function openJSON(file) {
    var reader = new FileReader()
    reader.onload = function(e) {
        var json = JSON.parse(e.target.result)
        console.log(json)
            // location.reload()
            // free toutes les listes sinon ça fait une fusion des elements
        setValueFromJSON(json)
        show('infos')
    };
    reader.readAsText(file)
}
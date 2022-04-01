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
    if (json.data && json.data.pictures)
        addPictureFromJSON(json.data.pictures)

    // Data - Sounds
    if (json.data && json.data.sounds)
        addSoundFromJSON(json.data.sounds)

    // Player
    if (json.player) {
        generatePlayer()

        var playerAbility = document.getElementById('playerAbility')
        var playerStamina = document.getElementById('playerStamina')
        var playerExtra = document.getElementById('playerExtra')
        var playerGold = document.getElementById('playerGold')

        // Player - Stats
        playerAbility.value = json.player.ability
        playerStamina.value = json.player.stamina
        playerExtra.value = json.player.extra
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

    json.dialogs.forEach(element => {
        addDialogFromJSON(element)
    })
}

function resetAll() {
    optionIDGlobal = 0
    buttonList = []
    colorJson = {}
    colorAdvanced = false
    dialogIDGlobal = 0
    dialogList = []
    objectsJson = {}
    dialogGraphList = ""
    isMap = false
    pictureJson = {}
    isPlayer = false
    playerSkills = {}
    playerObjects = {}
    skillsJson = {}
    soundJson = {}

    document.getElementById('player').innerHTML = ""
    document.getElementById("title").value = ""
    document.getElementById("startNumber").value = ""
    document.getElementById("defeatNumber").value = ""
    document.getElementById("maxDice").value = ""
    document.getElementById("maxSkills").value = ""
    document.getElementById("showPlayerStamina").checked = true
    document.getElementById("showPlayerAbility").checked = true
    document.getElementById("showPlayerSkills").checked = true
    document.getElementById("showPlayerGold").checked = true
    document.getElementById("showPlayerInventory").checked = true
    document.getElementById('soundList').innerHTML = ""
    document.getElementById('skillsList').innerHTML = ""
    document.getElementById('pictureList').innerHTML = ""
    document.getElementById('objectList').innerHTML = ""
    document.getElementById('colorList').innerHTML = ""

    resetDialog()
}

// open JSON file
function openJSON(file) {
    var reader = new FileReader()
    reader.onload = function(e) {
        var json = JSON.parse(e.target.result)
        resetAll()
            // free toutes les listes sinon ça fait une fusion des elements
        setValueFromJSON(json)
        show('infos')
    };
    reader.readAsText(file)
}
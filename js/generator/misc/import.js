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
    const css = document.getElementById("customCSS")
    const startPicture = document.getElementById("startPictureElem")
    const startBackground = document.getElementById("startBackgroundElem")
    const startAuthor = document.getElementById("startAuthor")
    const startLanguage = document.getElementById("startLanguage")
    const startSynopsis = document.getElementById("startSynopsis")

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
            if (element.name != "" && element.name != null && element.name != undefined)
                addSkillFromJSON(element)
        })
    }

    // Data - Objects
    if (json.gameplay.objectsInventory) {
        json.gameplay.objectsInventory.forEach(element => {
            if (element.name != "" && element.name != null && element.name != undefined)
                addObjectFromJSON(element)
        })
    }

    // Data - Pictures

    if (json.data && json.data.pictures) {
        if (jsonLen(json.data.pictures) != 0)
            addPictureFromJSON(json.data.pictures)
    }

    try {
        startPicture.value = json.gameInfos.previewPicture
        startBackground.value = json.gameInfos.previewBackground
        startAuthor.value = json.gameInfos.previewAuthor
        startLanguage.value = json.gameInfos.previewLanguage
        startSynopsis.value = json.gameInfos.previewSynopsis
    } catch (e) {}

    // Data - Sounds
    if (json.data && json.data.sounds) {
        if (jsonLen(json.data.sounds) != 0)
            addSoundFromJSON(json.data.sounds)
    }

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

    } else {
        const player = document.getElementById('player')
        player.innerHTML = `<div class="sub_container">
                                <div class="sub_container_title">Player</div>
                                Creating a player is mandatory if you want to use skills, items or even conditions on the dialog.
                                <button onclick="generatePlayer()" class="big-btn">Create new Player</button>
                            </div>`
    }

    json.dialogs.forEach(element => {
        addDialogFromJSON(element)
    })

    css.value = (json.css == undefined) ? "" : json.css
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
    playerSkills = []
    playerObjects = []
    skillsJson = {}
    soundJson = {}

    document.getElementById('player').innerHTML = ""
    document.getElementById("title").value = ""
    document.getElementById("startNumber").value = "0"
    document.getElementById("defeatNumber").value = ""
    document.getElementById("maxDice").value = ""
    document.getElementById("maxSkills").value = ""
    document.getElementById("customCSS").value = ""
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
    document.getElementById('startPictureElem').value = "No Game Cover"
    document.getElementById('startBackgroundElem').value = "No Game Illustration"
    document.getElementById("startAuthor").value = ""
    document.getElementById("startLanguage").value = ""
    document.getElementById("startSynopsis").value = ""

    resetDialog()
    Instantpreview()
}

function openJSON(file) {
    var reader = new FileReader()
    reader.onload = function(e) {
        var json = JSON.parse(e.target.result)
        resetAll()
            // free toutes les listes sinon ça fait une fusion des elements
        addDefaultValues()
        setValueFromJSON(json)
        show('infos')
    };
    reader.readAsText(file)
}

function openFile() {
    var input = document.getElementById('hero-js-form-json');
    input.click();
}

resetAll()
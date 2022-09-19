function initDialog(json) {
    var currentDialog
    var allButtons = []
    var tempCondition
    var tempEffect

    for (d in json.dialogs) {
        allButtons = []
        currentDialog = json.dialogs[d]

        // Génération des boutons
        try {
            for (b in currentDialog.buttons) {
                // Création du bouton
                allButtons.push(
                    new Button(
                        currentDialog.buttons[b].text,
                        currentDialog.buttons[b].goToIndex,
                        conditionID[currentDialog.buttons[b].condition],
                        currentDialog.buttons[b].conditionData,
                        effectID[currentDialog.buttons[b].effect],
                        currentDialog.buttons[b].effectData,
                        currentDialog.buttons[b].notification,
                        new Sound(((Array.isArray(currentDialog.buttons[b].sound)) ? currentDialog.buttons[b].sound : json.data.sounds[currentDialog.buttons[b].sound]))
                    )
                )
            }
        } catch (e) {}

        // Génération du dialogue
        allDialog.push(
            new Dialog(
                currentDialog.title,
                currentDialog.body,
                currentDialog.action,
                allButtons,
                currentDialog.img,
                currentDialog.background,
                currentDialog.music,
                currentDialog.animation
            )
        )
    }
}

function initGameInfos(json) {
    gameTitle = json.gameInfos.title
    currentNumber = json.gameInfos.startNumber
    maxDice = json.gameInfos.maxDice
    maxSkill = json.gameInfos.maxSkill
    showPlayerAbility = json.gameInfos.showPlayerAbility
    showPlayerStamina = json.gameInfos.showPlayerStamina
    showPlayerSkills = json.gameInfos.showPlayerSkills
    showPlayerGold = json.gameInfos.showPlayerGold
    showPlayerInventory = json.gameInfos.showPlayerInventory
    defeatNumber = json.gameInfos.defeatNumber
}

function initGameplay(json) {
    var temp

    if (json.gameplay == null)
        return

    // Génération des compétences
    if (json.gameplay.skills) {
        for (s in json.gameplay.skills) {
            try {
                temp = json.gameplay.skills[s]
                skillList.push(new Skill(temp.name, temp.stats))
            } catch (e) { continue }
        }
    }

    // Générations des objets classiques
    if (json.gameplay.objectsInventory) {
        for (i in json.gameplay.objectsInventory) {
            try {
                temp = json.gameplay.objectsInventory[i]
                inventoryList.push(new Object(temp.name, temp.data))
            } catch (e) { continue }
        }
    }

    fightTable = json.gameplay.fightTable
    if (fightTable != null && fightTable != undefined) { fightLimite = Math.floor(fightTable.length / 2) }
}

function initPlayer(json) {
    if (json.player == null)
        return

    // Génération du joueur
    player = new Player()
    player.ability = setInt(json.player.ability)
    player.stamina = setInt(json.player.stamina)
    if (json.player.maxStamina != undefined)
        player.maxStamina = json.player.maxStamina
    else
        player.maxStamina = player.stamina
    player.extra = setInt(json.player.extra)
    player.gold = setInt(json.player.gold)

    for (i in json.player.inventory)
        newObject(json.player.inventory[i], inventoryList, player.inventory)

    // Généation des compétences du joueur
    for (k in json.player.skills) {
        if (json.player.skills[k] == "RANDOM_IN_CLASS") {
            player.setSkill(randomFromList(skillList))
        } else if (json.player.skills[k] == "RANDOM_IN_CLASS_UNIQUE") {
            player.setSkill(randomFromListUnique(skillList, player.skill))
        } else {
            player.setSkill(getFromName(json.player.skills[k], skillList))
        }
    }
}

function initSound(json) {
    if (json.sounds == undefined) { return }

    sound_hurt = new Sound(json.sounds.hurt)
    sound_victory = new Sound(json.sounds.victory)
    sound_defeat = new Sound(json.sounds.defeat)
    music_fight = new Music(json.sounds.fight)
}

function launchGame() {
    document.getElementById("startMenu").style.display = "none"
    document.getElementById("header").style.display = "block"
    initDialog(defaultJSON)
    initGameInfos(defaultJSON)
    initGameplay(defaultJSON)
    initPlayer(defaultJSON)
    initSound(defaultJSON)
    setColor(defaultJSON)
    setDefaultHUD()
    allDialog[currentNumber].show()
}
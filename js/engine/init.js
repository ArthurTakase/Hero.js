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
                // Conditions des boutons
                switch (currentDialog.buttons[b].condition) {
                    case "GOLD":
                        tempCondition = 1;
                        break
                    case "EXTRA":
                        tempCondition = 2;
                        break
                    case "STAMINA":
                        tempCondition = 3;
                        break
                    case "ABILITY":
                        tempCondition = 4;
                        break
                    case "SKILL":
                        tempCondition = 5;
                        break
                    case "OBJECT":
                        tempCondition = 6;
                        break
                    default:
                        tempCondition = null;
                        break
                }

                // Effets des boutons
                switch (currentDialog.buttons[b].effect) {
                    case "REMOVE_OBJECT":
                        tempEffect = 1;
                        break
                    case "ADD_OBJECT":
                        tempEffect = 2;
                        break
                    case "GOLD":
                        tempEffect = 4;
                        break
                    case "EXTRA":
                        tempEffect = 6;
                        break
                    case "STAMINA":
                        tempEffect = 8;
                        break
                    case "ABILITY":
                        tempEffect = 10;
                        break
                    case "LIFE":
                        tempEffect = 11;
                        break
                    case "FIGHT":
                        tempEffect = 13;
                        break
                    case "RESTART":
                        tempEffect = 14;
                        break
                    default:
                        tempEffect = null;
                        break
                }

                // Création du bouton
                allButtons.push(
                    new Button(
                        currentDialog.buttons[b].text,
                        currentDialog.buttons[b].goToIndex,
                        tempCondition,
                        currentDialog.buttons[b].conditionData,
                        tempEffect,
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
    showPlayerSpecial = json.gameInfos.showPlayerSpecial
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
                inventoryList.push(new Object(temp.name, temp.type, temp.data))
            } catch (e) { continue }
        }
    }

    // Génération des objets spéciaux
    if (json.gameplay.objectsSpecial) {
        for (j in json.gameplay.objectsSpecial) {
            try {
                temp = json.gameplay.objectsSpecial[j]
                specialList.push(new Object(temp.name, temp.type, temp.data))
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
    for (j in json.player.special)
        newObject(json.player.special[j], specialList, player.special)

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

function initGame(file) {
    var reader = new FileReader();
    reader.onload = function(evt) {
        defaultJSON = JSON.parse(evt.target.result)
        initDialog(defaultJSON)
        initGameInfos(defaultJSON)
        initGameplay(defaultJSON)
        initPlayer(defaultJSON)
        initSound(defaultJSON)
        setColor(defaultJSON)
        reloadSave(defaultJSON)
        setDefaultHUD()
        allDialog[currentNumber].show()
    };
    reader.readAsText(file);
}
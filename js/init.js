function initDialog(json) {
    var currentDialog
    var allButtons = []
    var tempCondition
    var tempEffect

    for (d in json.dialogs) {
        allButtons = []
        currentDialog = json.dialogs[d]
        
        // Génération des boutons
        for (b in currentDialog.buttons) {
            // Conditions des boutons
            switch (currentDialog.buttons[b].condition) {
                case "GOLD": tempCondition = 1; break
                case "MEAL": tempCondition = 2; break
                case "STAMINA": tempCondition = 3; break
                case "ABILITY": tempCondition = 4; break
                case "SKILL": tempCondition = 5; break
                case "OBJECT": tempCondition = 6; break
                default: tempCondition = null; break
            }

            // Effets des boutons
            switch (currentDialog.buttons[b].effect) {
                case "REMOVE_OBJECT": tempEffect = 1; break
                case "ADD_OBJECT": tempEffect = 2; break
                case "REMOVE_GOLD": tempEffect = 3; break
                case "ADD_GOLD": tempEffect = 4; break
                case "REMOVE_MEAL": tempEffect = 5; break
                case "ADD_MEAL": tempEffect = 6; break
                case "REMOVE_STAMINA": tempEffect = 7; break
                case "ADD_STAMINA": tempEffect = 8; break
                case "REMOVE_ABILITY": tempEffect = 9; break
                case "ADD_ABILITY": tempEffect = 10; break
                case "HEAL": tempEffect = 11; break
                case "HURT": tempEffect = 12; break
                case "FIGHT": tempEffect = 13; break
                default: tempEffect = null; break
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
                    currentDialog.buttons[b].notification
                )
            )
        }

        // Génération du dialogue
        allDialog.push(
            new Dialog(
                currentDialog.title,
                currentDialog.body,
                currentDialog.action,
                allButtons,
                currentDialog.img,
                currentDialog.background,
                currentDialog.music
            )
        )
    }
}

function initGameInfos(json) {
    gameTitle = json.gameInfos.title
    if (json.gameInfos.currentNumber == undefined)
        currentNumber = json.gameInfos.startNumber
    else
        currentNumber = json.gameInfos.currentNumber
    beginNumber = json.gameInfos.startNumber
    maxDice = json.gameInfos.maxDice
    maxSkill = json.gameInfos.maxSkill
    showTitleHUD = json.gameInfos.showTitle
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
            temp = json.gameplay.skills[s]
            skillList.push(new Skill(temp.name, temp.stats))
        }
    }

    // Générations des objets classiques
    if (json.gameplay.objectsInventory) {
        for (i in json.gameplay.objectsInventory) {
            temp = json.gameplay.objectsInventory[i]
            inventoryList.push(new Object(temp.name, temp.type, temp.data))
        }
    }

    // Génération des objets spéciaux
    if (json.gameplay.objectsSpecial) {
        for (j in json.gameplay.objectsSpecial) {
            temp = json.gameplay.objectsSpecial[j]
            specialList.push(new Object(temp.name, temp.type, temp.data))
        }
    }

    fightTable = json.gameplay.fightTable
    fightLimite = Math.floor(fightTable.length / 2)
}

function initPlayer(json) {
    var temp

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
    player.meal = setInt(json.player.meal)
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
            temp = randomFromListUnique(skillList, player.skill)
            if (temp != null)
                player.setSkill(temp)
        } else {
            temp = getFromName(json.player.skills[k], skillList)
            if(temp != null)
                player.setSkill(temp)
        }
    }
}

function initSound(json) {
    if (json.music == undefined) {return}

    sound_hurt = new Sound(json.music.hurt)
    sound_victory = new Sound(json.music.victory)
    sound_defeat = new Sound(json.music.defeat)
    music_fight = new Music(json.music.fight)
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
        setDefaultHUD()
        allDialog[currentNumber].show()
    };
    reader.readAsText(file);
}
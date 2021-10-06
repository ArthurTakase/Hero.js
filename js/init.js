function initDialog(json) {
    var currentDialog
    var allButtons = []
    var tempCondition
    var tempData

    for (d in json.dialogs) {
        allButtons = []
        currentDialog = json.dialogs[d]
        
        // Génération des boutons
        for (b in currentDialog.buttons) {
            switch (currentDialog.buttons[b].condition) {
                case "GOLD": tempCondition = 1; break
                case "MEAL": tempCondition = 2; break
                case "STAMINA": tempCondition = 3; break
                case "ABILITY": tempCondition = 4; break
                case "SKILL": tempCondition = 5; break
                case "OBJECT": tempCondition = 6; break
                default: tempCondition = null; break
            }

            allButtons.push(
                new Button(
                    currentDialog.buttons[b].text,
                    currentDialog.buttons[b].goToIndex,
                    tempCondition,
                    currentDialog.buttons[b].conditionData
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
                currentDialog.background
            )
        )
    }
}

function initGameInfos(json) {
    gameTitle = json.gameInfos.title
    currentNumber = json.gameInfos.startNumber
    maxDice = json.gameInfos.maxDice
    maxSkill = json.gameInfos.maxSkill
    showTitleHUD = json.gameInfos.showTitle
}

function initGameplay(json) {
    var temp

    if (json.gameplay == null)
        return

    // Génération des compétences
    if (json.gameplay.skills) {
        for (s in json.gameplay.skills) {
            temp = json.gameplay.skills[s]
    
            skillList.push(
                new Skill(
                    temp.name,
                    temp.stats
                )
            )
        }
    }

    // Générations des objets classiques
    if (json.gameplay.objectsInventory) {
        for (i in json.gameplay.objectsInventory) {
            temp = json.gameplay.objectsInventory[i]
    
            inventoryList.push(
                new Object(
                    temp.name,
                    temp.type,
                    temp.data
                )
            )
        }
    }

    // Génération des objets spéciaux
    if (json.gameplay.objectsSpecial) {
        for (j in json.gameplay.objectsSpecial) {
            temp = json.gameplay.objectsSpecial[j]
    
            specialList.push(
                new Object(
                    temp.name,
                    temp.type,
                    temp.data
                )
            )
        }
    }
}

function appendInventory(object, list, playerData) {
    var temp

    for (i in object) {
        if (object[i] == "RANDOM_IN_CLASS") {
            player.addStuff(randomFromList(list))
        } else if (object[i] == "RANDOM_IN_CLASS_UNIQUE") {
            temp = randomFromListUnique(list, playerData)
            if (temp != null)
                player.addStuff(temp)
        } else if (typeof object[i] === 'string') {
            temp = getFromName(object[i], list)
            if(temp != null)
                player.addStuff(temp)
        } else {
            player.addStuff(
                new Object(
                    object[i].name,
                    object[i].type,
                    object[i].data
                )
            )
        }
    }
}

function initPlayer(json) {
    var temp

    if (json.player == null)
        return

    // Génération du joueur
    player = new Player()
    player.ability = setInt(json.player.ability)
    player.stamina = setInt(json.player.stamina)
    player.maxStamina = player.stamina
    player.meal = setInt(json.player.meal)
    player.gold = setInt(json.player.gold)

    appendInventory(json.player.inventory, inventoryList, player.inventory)
    appendInventory(json.player.special, specialList, player.special)

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

function initGame(file) {
    let json = ""

    var reader = new FileReader();
    reader.onload = function(evt) {
        json = JSON.parse(evt.target.result)
        initDialog(json)
        initGameInfos(json)
        initGameplay(json)
        initPlayer(json)
        setDefaultHUD()
        allDialog[currentNumber].show()
    };
    reader.readAsText(file);
}
function initDialog(json) {
    var currentDialog
    var allButtons = []

    for (d in json.dialogs) {
        allButtons = []
        currentDialog = json.dialogs[d]
        
        // Génération des boutons
        for (b in currentDialog.buttons) {
            allButtons.push(
                new Button(
                    currentDialog.buttons[b].text,
                    currentDialog.buttons[b].goToIndex,
                    currentDialog.buttons[b].condition
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
    var currentSkill
    
    weapons = json.gameplay.weapons

    // Génération des compétences
    for (s in json.gameplay.skills) {
        currentSkill = json.gameplay.skills[s]

        skillList.push(
            new Skill(
                currentSkill.name,
                currentSkill.stats
            )
        )

        if (currentSkill.function != null) {
            console.log("function(" + currentSkill.function.arguments + ") {"+ currentSkill.function.body + "};")
        }
    }
}

function initPlayer(json) {
    var temp

    if (json.player == null) {
        player = null
        return
    }

    // Génération du joueur
    player = new Player()
    player.ability = json.player.ability
    player.stamina = json.player.stamina
    player.maxStamina = player.stamina
    player.meal = json.player.meal
    player.gold = json.player.gold

    // Génération de l'inventaire du joueur
    for (i in json.player.inventory) {
        player.addStuff(
            new Object(
                json.player.inventory[i].name,
                json.player.inventory[i].type,
                json.player.inventory[i].data
            )
        )
    }

    // Génération de l'inventaire spécial du joueur
    for (j in json.player.special) {
        player.addStuff(
            new Object(
                json.player.special[j].name,
                json.player.special[j].type,
                json.player.special[j].data
            )
        )
    }

    // Généation des compétences du joueur
    for (k in json.player.skills) {
        if (json.player.skills[k]== "HEROS-JS-RANDOM-CHOICE") {
            player.setSkill(randomFromList(skillList))
        } else {
            temp = getFromName(json.player.skills[k], skillList)
            if(temp != null)
                player.setSkill(temp)
        }
    }

    player.setDefaultStuffBonus()
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
        game(json)
    };
    reader.readAsText(file);
}
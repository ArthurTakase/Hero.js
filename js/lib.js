/***********************************/
/*            VARIABLES            */
/***********************************/

let defaultJSON = null
let gameTitle
let beginNumber
let currentNumber
let defeatNumber
let maxDice
let maxSkill
let allDialog = []
let skillList = []
let inventoryList = []
let specialList = []
let fightTable = []
let fightLimite
let player = null
let fight = null
// Affichage
let showTitleHUD = true
let showPlayerAbility = true
let showPlayerStamina = true
let showPlayerSkills = true
let showPlayerGold = true
let showPlayerInventory = true
let showPlayerSpecial = true
// Audio
let sound_hurt = null
let sound_victory = null
let sound_defeat = null
let music = null
let music_fight = null

/***********************************/
/*          LIB FUNCTIONS          */
/***********************************/

function randomFromList(liste) {
    return liste[Math.floor(Math.random()*liste.length)]
}

function randomFromListUnique(liste, target) {
    var temp
    var random = Math.floor(Math.random() * liste.length)
    var origin = random

    temp = liste[random]
    while (target.includes(temp)) {
        random++
        if (random >= liste.length)
            random = 0
        if (random == origin)
            return null
        temp = liste[random]
    } 
    return temp
}

function getFromName(item, list) {
    for (i in list) {
        if (list[i].name == item) {
            return list[i]
        }
    }
    return null
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * max) + min
}

function setInt(objetValue) {
    if (typeof objetValue === 'string') {
        if (objetValue.startsWith("RANDOM")) {
            var value = objetValue.split(',')
            if (value[2] == "DICE") {
                return randomInRange(parseInt(value[1]), maxDice + 1)
            } else {
                return randomInRange(parseInt(value[1]), parseInt(value[2]) + 1)
            }
        }
        return -1
    } else {
        return objetValue
    }
}

function removeFromPlayer(object, list) {
    var temp
    
    if (object == "RANDOM_IN_CLASS") {
        temp = Math.floor(Math.random() * list.length)
        player.removeStuffBonus(list[temp])
        list.splice(temp, 1)
    } else {
        for (i in list) {
            if (list[i].name == object) {
                player.removeStuffBonus(list[i])
                list.splice(i, 1)
                break
            }
        }
    }
}

function newObject(object, list, playerData) {
    var temp
    
    if (object == "RANDOM_IN_CLASS") {
        player.addStuff(randomFromList(list))
    } else if (object == "RANDOM_IN_CLASS_UNIQUE") {
        temp = randomFromListUnique(list, playerData)
        if (temp != null)
            player.addStuff(temp)
    } else if (typeof object === 'string') {
        temp = getFromName(object, list)
        if(temp != null)
            player.addStuff(temp)
    } else {
        player.addStuff(
            new Object(
                object.name,
                object.type,
                object.data
            )
        )
    }
}

function restart() {
    allDialog = []
    skillList = []
    inventoryList = []
    specialList = []
    player = null
    showTitleHUD = true
    showPlayerAbility = true
    showPlayerStamina = true
    showPlayerSkills = true
    showPlayerGold = true
    showPlayerInventory = true
    showPlayerSpecial = true

    initDialog(defaultJSON)
    initGameInfos(defaultJSON)
    initGameplay(defaultJSON)
    initPlayer(defaultJSON)
    allDialog[defaultJSON.gameInfos.startNumber].show()
}

function getObjectName(object) {
    if (typeof object == 'string')
        return object
    return object.name
}

function setColor(json) {
    const root = document.documentElement.style

    for (elem in json.color) {
        root.setProperty('--' + json.color[elem][0] + 'Color', json.color[elem][1])
    }
}

function isPlaying(audelem) {
    return !audelem.paused;
}
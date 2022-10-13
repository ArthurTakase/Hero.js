/***********************************/
/*            VARIABLES            */
/***********************************/

let defaultJSON = null
let gameTitle
let beginNumber
let currentNumber
let defeatNumber
let maxDice = 10
let maxSkill
let allDialog = []
let skillList = []
let inventoryList = []
let fightTable = []
let fightLimite
let player = null
let fight = null
    // Affichage
let showPlayerAbility = true
let showPlayerStamina = true
let showPlayerSkills = true
let showPlayerGold = true
let showPlayerInventory = true
    // Audio
let sound_hurt = null
let sound_victory = null
let sound_defeat = null
let music = null
let music_fight = null

const conditionID = {
    "GOLD": 1,
    "EXTRA": 2,
    "STAMINA": 3,
    "ABILITY": 4,
    "SKILL": 5,
    "OBJECT": 6,
    "INPUT": 7
}

const effectID = {
    "REMOVE_OBJECT": 1,
    "ADD_OBJECT": 2,
    "GOLD": 4,
    "EXTRA": 6,
    "STAMINA": 8,
    "ABILITY": 10,
    "LIFE": 11,
    "FIGHT": 13,
    "RESTART": 14
}

/***********************************/
/*          LIB FUNCTIONS          */
/***********************************/

function randomFromList(liste) {
    return liste[Math.floor(Math.random() * liste.length)]
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

function randomNumber(value) {
    var temp = value.split("(")[1].split(")")[0].split(",")

    if (temp.length == 1) {
        temp.push(temp[0])
        temp[0] = "0"
    }

    if (temp[0] === "DICE") temp[0] = `${maxDice}`
    if (temp[1] === "DICE") temp[1] = `${maxDice}`

    return Math.floor(Math.random() * (parseInt(temp[1]) - parseInt(temp[0]) + 1)) + parseInt(temp[0])
}

function setInt(objetValue) {
    if (typeof objetValue === 'string') {
        if (objetValue.startsWith("RANDOM")) return randomNumber(objetValue)
        return -1
    } else { return objetValue }
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
        if (temp != null)
            player.addStuff(temp)
    } else {
        player.addStuff(
            new Object(
                object.name,
                object.data
            )
        )
    }
}

function restart() {
    allDialog = []
    skillList = []
    inventoryList = []
    player = null
    showPlayerAbility = true
    showPlayerStamina = true
    showPlayerSkills = true
    showPlayerGold = true
    showPlayerInventory = true

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
        root.setProperty('--' + json.color[elem][0], json.color[elem][1])
    }

    if (json.data && json.data.css)
        addStyle(json.data.css)
}

function isPlaying(audelem) {
    return !audelem.paused;
}

function isMobile() {
    return ((window.innerWidth <= 768) || (window.innerHeight <= 768));
}
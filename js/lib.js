/***********************************/
/*            VARIABLES            */
/***********************************/

let gameTitle
let currentNumber
let maxDice
let maxSkill
let allDialog = []
let skillList = []
let inventoryList = []
let specialList = []
let player = null
let showTitleHUD = true

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
                return randomInRange(parseInt(value[1]), maxDice)
            } else {
                return randomInRange(parseInt(value[1]), parseInt(value[2]))
            }
        }
        return -1
    } else {
        return objetValue
    }
}

function removeFromPlayer(object, list) {
    for (i in list) {
        if (list[i].name == object)
            list.splice(i)
    }
}
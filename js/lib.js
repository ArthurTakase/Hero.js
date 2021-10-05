/***********************************/
/*            VARIABLES            */
/***********************************/

let gameTitle
let currentNumber
let maxDice
let maxSkill
let allDialog = []
let weapons = []
let skillList = []
let inventoryList = []
let specialList = []
let player
let showTitleHUD = "yes"

/***********************************/
/*          LIB FUNCTIONS          */
/***********************************/

function randomFromList(liste) {
    return liste[Math.floor(Math.random()*liste.length)]
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
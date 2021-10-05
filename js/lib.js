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
let player
let showTitleHUD = "yes"

/***********************************/
/*          LIB FUNCTIONS          */
/***********************************/

function randomFromList(liste) {
    return liste[Math.floor(Math.random()*liste.length)]
}

function getFromName(item, list) {
    console.log(item, list)
    for (i in list) {
        if (list[i].name == item) {
            return list[i]
        }
    }
    return null
}
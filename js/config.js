/***********************************/
/*            GAME CONFIG          */
/***********************************/

let maxDice = 9
let maxSkill = 5
let maxGold = 50 // NON CONFIGURE
let maxInventory = 8 // NON CONFIGURE
let maxWeapon = 2 // NONCONFIGURE
let skillList = [
    "camouflage",
    "chasse",
    "sixieme sens",
    "orientation",
    "guerison",
    "armes",
    "bouclier",
    "puissance",
    "comm. animale",
    "maitrise"
]
let weapons = [
    "poignard",
    "lance",
    "masse",
    "sabre",
    "marteau",
    "epee",
    "hache",
    "epee",
    "baton",
    "glaive"
]

/***********************************/
/*       DEFAULT PLAYER STATS      */
/***********************************/

let defaultAbility = 10 + Math.floor(Math.random() * maxDice)
let defaultStamina = 20 + Math.floor(Math.random() * maxDice)
let defaultInventory = [
    new Object("tunique", "inventory", [0, 0, 0, 0]),
    new Object("cape", "inventory", [0, 0, 0, 0]),
    new Object("hache", "inventory", [0, 0, 0, 0])
]
let defaultSpecial = [
    new Object("carte", "special", [0, 0, 0, 0])
]
let defaultMeal = 1
let defaultGold = Math.floor(Math.random() * maxDice)
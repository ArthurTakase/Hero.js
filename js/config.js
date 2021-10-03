/***********************************/
/*            GAME CONFIG          */
/***********************************/

let maxDice = 9
let maxKai = 5
let maxGold = 50 // NON CONFIGURE
let maxInventory = 8 // NON CONFIGURE
let maxWeapon = 2 // NONCONFIGURE
let kaiList = [
    "camouflage",
    "chasse",
    "sixieme sens",
    "orientation",
    "guerison",
    "armes",
    "bouclier",
    "puissance",
    "communication animale",
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

let defaultAbility = 10
let defaultStamina = 20
let defaultInventory = ["tunique", "cape de Seigneur Kaï", "hache"]
let defaultMeal = 1
let defaultGold = Math.floor(Math.random() * maxDice)
let defaultSpecial = ["carte"]
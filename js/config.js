/***********************************/
/*            GAME CONFIG          */
/***********************************/

let maxDice = 9
let maxSkill = 5
let maxGold = 50 // NON CONFIGURE
let maxInventory = 8 // NON CONFIGURE
let maxWeapon = 2 // NONCONFIGURE
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
let skillList = [
    // new Skill(name, [ability, stamina, bestWeapon])
    new Skill("camouflage", [0, 0, null]),
    new Skill("chasse", [0, 0, null]),
    new Skill("sixième sens", [0, 0, null]),
    new Skill("orientation", [0, 0, null]),
    new Skill("guerison", [0, 0, null]),
    new Skill("maitre des armes", [0, 0, randomFromList(weapons)]),
    new Skill("bouclier", [0, 0, null]),
    new Skill("puissance", [2, 0, null]),
    new Skill("communication animale", [0, 0, null]),
    new Skill("maitrise", [0, 0, null])
]

/***********************************/
/*       DEFAULT PLAYER STATS      */
/***********************************/

let defaultAbility = 10 + Math.floor(Math.random() * maxDice)
let defaultStamina = 20 + Math.floor(Math.random() * maxDice)
let defaultInventory = [
    // new Object(name, type, [ability, stamina, gold, meal])
    new Object("tunique", "inventory", [0, 0, 0, 0]),
    new Object("cape", "inventory", [0, 0, 0, 0]),
    new Object("hache", "inventory", [0, 0, 0, 0])
]
let defaultSpecial = [
    new Object("carte", "special", [0, 0, 0, 0])
]
let defaultMeal = 1
let defaultGold = Math.floor(Math.random() * maxDice)
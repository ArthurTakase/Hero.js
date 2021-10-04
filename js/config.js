/***********************************/
/*             GAME INFOS          */
/***********************************/

let gameTitle = "🦅 Les Maîtres des Ténèbres 💀" // str
let currentNumber = 1 // int

/***********************************/
/*          GAMEPLAY CONFIG        */
/***********************************/

let maxDice = 9 // int
let maxSkill = 5 // int
let weapons = [ // Liste:str
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
let skillList = [ // Liste:Skill
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

let defaultAbility = 10 + Math.floor(Math.random() * maxDice) // int
let defaultStamina = 20 + Math.floor(Math.random() * maxDice) // int
let defaultInventory = [ // Liste:Object
    new Object("tunique", "inventory", [0, 0, 0, 0]),
    new Object("cape", "inventory", [0, 0, 0, 0]),
    new Object("hache", "inventory", [0, 0, 0, 0])
]
let defaultSpecial = [ // Liste:Object
    new Object("carte", "special", [0, 0, 0, 0])
]
let defaultMeal = 1 // int
let defaultGold = Math.floor(Math.random() * maxDice) // int
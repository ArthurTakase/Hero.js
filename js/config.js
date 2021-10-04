/***********************************/
/*             GAME INFOS          */
/***********************************/

let gameTitle = "🦅 Les Maîtres des Ténèbres 💀" // str
let currentNumber = 0 // int

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

/***********************************/
/*            DIALOGUES            */
/***********************************/

let dialog = [
    new Dialog(
        "Julien ce fdp",
        '"Putain, jai cassé mon tel et crevé mon vélo ! Wesh c\'est trop la loose... Je vais devoir me prostituer pour en acheter un autre, ça va durer des années..."',
        "Choisissez quoi lui répondre",
        [
            new Button("Nique ta grand mère sombre pute", 1, null)
        ],
        "img/orc.png",
        "img/night_forest.jpg"
    ),
    new Dialog(
        null,
        'Suite à votre insulte envers le vénérable Julien ce fdp, il vous a frappé au visage si fort à l\'aide d\'un poisson que vous en êtes mort. C\'est balo...',
        "Voulez vous recommencer ?",
        [
            new Button("Oui", 0, null)
        ],
        "img/grave.png",
        "img/tavern.jpg"
    )
]
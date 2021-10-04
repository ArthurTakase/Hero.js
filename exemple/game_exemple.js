/*
    Ce fichier est un exemple de l'utilisation de Hero.js dans le cadre d'un jeu.
*/

let player

function setFirstItem() {
    let i = Math.floor(Math.random() * maxDice)
    let items = [
        new Object("épée", "inventory", [0, 0, 0, 0]),
        new Object("casque", "special", [0, 2, 0, 0]),
        new Object("repas", "meal", [0, 0, 0, 2]),
        new Object("cote de mailles", "special", [0, 4, 0, 0]),
        new Object("masse", "inventory", [0, 0, 0, 0]),
        new Object("potion", "inventory", [0, 0, 0, 0]),
        new Object("baton", "inventory", [0, 0, 0, 0]),
        new Object("lance", "inventory", [0, 0, 0, 0]),
        new Object("argent", "gold", [0, 0, 12, 0]),
        new Object("glaive", "inventory", [0, 0, 0, 0])
    ]

    player.addStuff(items[i])
}

function createPlayer() {
    player = new Player()

    player.setSkill(randomFromList(skillList))
    player.setSkill(randomFromList(skillList))
    player.setSkill(randomFromList(skillList))
    player.setSkill(randomFromList(skillList))
    player.setSkill(randomFromList(skillList))
    player.setDefaultStuffBonus()
    setFirstItem()
}

// Main function
function game() {
    setDefaultHUD()
    createPlayer()
    dialog[currentNumber].show()
}

game()
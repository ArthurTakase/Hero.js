/*
    Ce fichier est un exemple de l'utilisation de Hero.js dans le cadre d'un jeu.
*/

console.log("game.js initialisé")
console.log('-----------------------------')

let player

function setFirstItem() {
    let i = Math.floor(Math.random() * maxDice)
    let tags = ["inventory", "special", "meal", "special", "inventory",
                "inventory", "inventory", "inventory", "gold", "inventory"]
    let items = ["epee", "casque", "2 repas", "cotes de mailles", "masse",
                "potion", "baton", "lance", "12 golds", "glaive"];

    if (tags[i] == "inventory") {
        player.addStuff(items[i], "inventory");
    } else if (tags[i] == "special") {
        player.addStuff(items[i], "special");
        switch (items[i]) {
            case "casque":
                player.stamina += 2;
                player.maxStamina = player.stamina
                break;
            case "cotte de mailles":
                player.stamina += 4;
                player.maxStamina = player.stamina
                break;
        }
    } else if (tags[i] == "meal") {
        player.meal += 2;
    } else {
        player.gold += 12;
    }
}

function createPlayer() {
    player = new Player()

    player.setSkill(random_from_list(skillList))
    player.setSkill(random_from_list(skillList))
    player.setSkill(random_from_list(skillList))
    player.setSkill(random_from_list(skillList))
    player.setSkill(random_from_list(skillList))
    setFirstItem()

    if (player.skill.includes("armes")) {player.bestWeapon = random_from_list(weapons)}
    if (player.skill.includes("puissance")) {player.ability += 2}

    player.show()
}

// Main function
function game() {
    createPlayer()
}

game()

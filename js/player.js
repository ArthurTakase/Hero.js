console.log("player.js initialisé")

class Player {
    constructor() {
        this.ability = defaultAbility;
        this.stamina = defaultStamina;
        this.maxStamina = 0;
        this.kai = [];
        this.bestWeapon = null;
        this.inventory = defaultInventory;
        this.meal = defaultMeal;
        this.gold = defaultGold;
        this.special = defaultSpecial;
    }

    setStats() {
        this.ability += Math.floor(Math.random() * maxDice);
        this.stamina += Math.floor(Math.random() * maxDice);
        this.maxStamina = this.stamina;
    }

    setKai(kai) {
        if (!kaiList.includes(kai)) {
            console.log("ERREUR: Mauvais Kai.")
            return
        }
        if (this.kai.length < maxKai) {
            this.kai.push(kai);
        }
    }

    addStuff(stuff, type) {
        if (type == "inventory")
            this.inventory.push(stuff);
        if (type == "special")
            this.special.push(stuff);
    }
}
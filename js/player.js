console.log("player.js initialisé")

class Player {
    constructor() {
        this.ability = defaultAbility;
        this.stamina = defaultStamina;
        this.maxStamina = defaultStamina;
        this.skill = [];
        this.bestWeapon = null;
        this.inventory = defaultInventory;
        this.meal = defaultMeal;
        this.gold = defaultGold;
        this.special = defaultSpecial;
    }

    setSkill(skill) {
        if (!skillList.includes(skill)) {
            console.log("ERREUR: Mauvais Skill.")
            return
        }
        if (this.skill.length < maxSkill) {
            this.skill.push(skill);
        }
    }

    addStuff(stuff, type) {
        if (type == "inventory")
            this.inventory.push(stuff);
        if (type == "special")
            this.special.push(stuff);
    }

    show() {
        let abilityList = ""
        let inventoryList = ""
        let specialList = ""

        for (var i = 0; i != this.skill.length; i++) {abilityList += "<li>" + this.skill[i] + "</li>\n"}
        for (var j = 0; j != this.inventory.length; j++) {inventoryList += "<li>" + this.inventory[j] + "</li>"}
        if (this.meal != 0) {inventoryList += "<li> Repas x" + this.meal + "</li>"}
        for (var k = 0; k != this.special.length; k++) {specialList += "<li>" + this.special[k] + "</li>"}

        document.body.innerHTML =   '<div class="hero-js-player hero-js-player-left">\
                                        <div class="hero-js-stats">\
                                            <div class="hero-js-stats-header">Ability</div>\
                                            <div class="hero-js-stats-body" id="hero-js-ability">' + this.ability + '</div>\
                                        </div>\
                                        <div class="hero-js-stats">\
                                            <div class="hero-js-stats-header">Stamina</div>\
                                            <div class="hero-js-stats-body" id="hero-js-stamina">' + this.stamina + '/' + this.maxStamina + '</div>\
                                        </div>\
                                        <div class="hero-js-stats">\
                                            <div class="hero-js-stats-header">Skills</div>\
                                            <div class="hero-js-stats-body" id="hero-js-stamina">\
                                                <ul id="hero-js-skill">' + abilityList + '</ul>\
                                            </div>\
                                        </div>\
                                    </div>\
                                    <div class="hero-js-player hero-js-player-right">\
                                        <div class="hero-js-stats">\
                                            <div class="hero-js-stats-header">Inventory</div>\
                                            <div class="hero-js-stats-body" id="hero-js-stamina">\
                                                <ul id="hero-js-inventory">' + inventoryList + '</ul>\
                                            </div>\
                                        </div>\
                                        <div class="hero-js-stats">\
                                            <div class="hero-js-stats-header">Special</div>\
                                            <div class="hero-js-stats-body" id="hero-js-stamina">\
                                                <ul id="hero-js-special">' + specialList + '</ul>\
                                            </div>\
                                        </div>\
                                    </div>'
    }
}
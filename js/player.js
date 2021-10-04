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
        if (this.skill.length < maxSkill) {
            this.skill.push(skill);
            this.ability += skill.bonusAbility
            this.stamina += skill.bonusStamina
            this.bestWeapon = skill.bonusWeapon
        }
    }

    setStuffBonus(object) {
        this.ability += object.bonusAbility
        this.stamina += object.bonusStamina
        this.gold += object.bonusGold
        this.meal += object.bonusMeal
        this.maxStamina = this.stamina
    }

    setDefaultStuffBonus() {
        for (var i = 0; i != this.inventory.length; i++)
            this.setStuffBonus(this.inventory[i])
        for (var j = 0; j != this.special.length; j++)
            this.setStuffBonus(this.special[j])
    }

    addStuff(object) {
        if (object == null)
            return
        if (object.type == "inventory")
            this.inventory.push(object);
        if (object.type == "special")
            this.special.push(object);
        this.setStuffBonus(object)
    }

    show() {
        let abilityList = ""
        let inventoryList = ""
        let specialList = ""

        for (var i = 0; i != this.skill.length; i++) {abilityList += "<li>" + this.skill[i].name + "</li>\n"}
        for (var j = 0; j != this.inventory.length; j++) {inventoryList += "<li>" + this.inventory[j].name + "</li>"}
        if (this.meal != 0) {inventoryList += "<li> Repas x" + this.meal + "</li>"}
        for (var k = 0; k != this.special.length; k++) {specialList += "<li>" + this.special[k].name + "</li>"}

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
                                            <div class="hero-js-stats-header">Gold</div>\
                                            <div class="hero-js-stats-body" id="hero-js-stamina">' + this.gold + '</div>\
                                        </div>\
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
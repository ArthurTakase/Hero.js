class Player {
    constructor() {
        this.ability
        this.stamina
        this.maxStamina
        this.skill = []
        this.bestWeapon = null
        this.inventory = []
        this.extra
        this.gold
    }

    setSkill(skill) {
        if (skill == null) { return }
        if (this.skill.length < maxSkill) {
            this.skill.push(skill);
            this.ability += skill.bonusAbility
            this.stamina += skill.bonusStamina
        }
    }

    setStuffBonus(object) {
        this.ability += object.bonusAbility
        this.maxStamina += object.bonusStamina
        this.gold += object.bonusGold
        this.extra += object.bonusExtra
        this.stamina += object.bonusStamina
        if (this.stamina > this.maxStamina) { this.stamina = this.maxStamina }
    }

    removeStuffBonus(object) {
        this.ability -= object.bonusAbility
        this.maxStamina -= object.bonusStamina
        this.gold -= object.bonusGold
        this.extra -= object.bonusExtra
        this.stamina -= object.bonusStamina
    }

    addStuff(object) {
        if (object == null)
            return
        this.inventory.push(object);
        this.setStuffBonus(object)
    }

    show() {
        var playerHTML = ''

        if (showPlayerStamina != false)
            playerHTML += '<a class="nav__link"><i class="bx bx-heart nav__icon"></i><span class="nav__name">' + this.stamina + '/' + this.maxStamina + '</span></a>'

        if (showPlayerAbility != false)
            playerHTML += '<a class="nav__link"><i class="bx bxs-zap nav__icon"></i><span class="nav__name">' + this.ability + '</span></a>'

        if (showPlayerGold != false)
            playerHTML += '<a class="nav__link"><i class="bx bx-euro nav__icon" ></i><span class="nav__name">' + this.gold + '</span></a>'

        if (showPlayerSkills != false) {
            playerHTML += `<div class="nav__dropdown" id="skillDropDown" onclick="showDropDown('skillDropDown')"><a class="nav__link"><i class="bx bx-dna nav__icon"></i>\
                        <span class="nav__name">Skills</span><i class="bx bx-chevron-down nav__icon nav__dropdown-icon"></i>\
                        </a><div class="nav__dropdown-collapse"><div class="nav__dropdown-content">`
            for (var i = 0; i != this.skill.length; i++)
                playerHTML += '<a class="nav__dropdown-item">' + this.skill[i].name + '</a>'
            playerHTML += '</div></div></div>'
        }

        if (showPlayerInventory != false) {
            playerHTML += `<div class="nav__dropdown" id="inventoryDropDown" onclick="showDropDown('inventoryDropDown')"><a class="nav__link"><i class="bx bx-briefcase-alt-2 nav__icon"></i>\
                        <span class="nav__name">Inventory</span><i class="bx bx-chevron-down nav__icon nav__dropdown-icon"></i>\
                        </a><div class="nav__dropdown-collapse"><div class="nav__dropdown-content">`
            for (var j = 0; j != this.inventory.length; j++)
                playerHTML += '<a class="nav__dropdown-item">' + this.inventory[j].name + '</a>'
            playerHTML += '</div></div></div>'
        }

        document.getElementById('player__data').innerHTML = playerHTML
    }
}
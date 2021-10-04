class Skill {
    constructor(name, stats) {
        this.name = name // str
        this.bonusAbility = stats[0] // int
        this.bonusStamina = stats[1] // int
        this.bonusWeapon = stats[2] // str || null
    }
}
class Fight {
    constructor(data) {
        this.ability = setInt(data[0])
        this.stamina = setInt(data[1])
        this.reward = data[2]
        this.zoneEffect = setInt(data[3])
        this.img = data[4]
        this.background = data[5]
        this.title = data[6]
        this.quotient = player.ability - this.ability
    }

    show(dice) {
        var img = '<div class="hero-js-dialog-img"><img src="' + this.img + '">\
        <div id="fight-stats">🗡️' + this.ability + '  ❤️' + this.stamina + '  ⭐️' + this.zoneEffect + '</div>\
        </div>'
        var buttons = '<button class="hero-js-button hero-js-activate" onclick="attack()">Attaquer</button>\n'
        buttons += '<button class="hero-js-button hero-js-not-activate">Fuir</button>\n'
        var title = '<div class="hero-js-dialog-header">' + this.title + '</div>'
        
        var diceElem = '<div id="dice">\
                        <div class="face" id="face-top">6</div>\
                        <div class="face" id="face-front">' + dice + '</div>\
                        <div class="face" id="face-right">5</div>\
                        <div class="face" id="face-back">4</div>\
                        <div class="face" id="face-left">3</div>\
                        <div class="face" id="face-bottom">2</div>\
                    </div>'
        setBackground(this.background)
        document.getElementById('hero-js-all').innerHTML = img +
                                                        '<div class="hero-js-dialog">' +
                                                        '<div id="fight-mode">🔴 FIGHT MODE</div>' +
                                                        diceElem +
                                                        title +
                                                        '<div class="hero-js-dialog-button-zone">' + buttons + '</div>\
                                                        </div>'
        if (showTitleHUD) {showTitle()}
        if (player != null) {player.show()}
    }

    checkVictory() {
        if (this.stamina <= 0 || this.quotient > fightLimite) {
            setEffect(10, null, null, [this.reward[0]])
            setEffect(11, null, null, [this.reward[1]])
            setEffect(4, null, null, [this.reward[2]])
            setEffect(6, null, null, [this.reward[3]])
            allDialog[currentNumber].show(player)
            anime("victory")
            return true
        }
        if (player.stamina <= 0 || this.quotient < 0 - fightLimite) {
            showTitleHUD = false
            showPlayerAbility = false
            showPlayerStamina = false
            showPlayerSkills = false
            showPlayerGold = false
            showPlayerInventory = false
            showPlayerSpecial = false
            allDialog[defeatNumber].show(player)
            anime("defeat")
            return true
        }
    }

}

function launchFight(data) {
    fight = new Fight(data)
    if (fight.checkVictory()) {return}
    fight.show("N.C.")
}

function attack() {
    if (fight.checkVictory()) {return}
    
    var dice = randomInRange(0, maxDice)

    var data = fightTable[fight.quotient + fightLimite][dice]
    fight.stamina -= Math.floor(data[0] * fight.zoneEffect)
    player.stamina -= data[1]
    
    if (fight.checkVictory()) {return}
    
    anime("shake")
    fight.show(dice)
}
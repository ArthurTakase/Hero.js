function exportJSON(data) {
    data = JSON.stringify(data)
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
    element.setAttribute('download', gameTitle + "-save.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function save() {
    var temp = defaultJSON
    var inventory = []
    var special = []
    var skills = []

    temp.gameInfos.currentNumber = currentNumber
    temp.player.ability = player.ability
    temp.player.stamina = player.stamina
    temp.player.maxStamina = player.maxStamina
    temp.player.meal = player.meal
    temp.player.gold = player.gold

    for (item in player.inventory)
        inventory.push(player.inventory[item].name)
    
    for (item in player.special)
        special.push(player.special[item].name)
    
    for (i in player.skill)
        skills.push(player.skill[i].name)
    
    temp.player.inventory = inventory
    temp.player.special = special
    temp.player.skills = skills

    exportJSON(temp)

}

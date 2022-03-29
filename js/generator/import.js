// set input value with json data
function setValueFromJSON(json) {
    const gameTitle = document.getElementById("title")
    const startNumber = document.getElementById("startNumber")
    const defeatNumber = document.getElementById("defeatNumber")
    const maxDice = document.getElementById("maxDice")
    const maxSkills = document.getElementById("maxSkills")
    const showStamina = document.getElementById("showPlayerStamina")
    const showAbility = document.getElementById("showPlayerAbility")
    const showSkills = document.getElementById("showPlayerSkills")
    const showGold = document.getElementById("showPlayerGold")
    const showInventory = document.getElementById("showPlayerInventory")

    // Game Infos - General
    gameTitle.value = json.gameInfos.title
    startNumber.value = json.gameInfos.startNumber
    defeatNumber.value = json.gameInfos.defeatNumber
    maxDice.value = json.gameInfos.maxDice
    maxSkills.value = json.gameInfos.maxSkill

    // Game Infos - Display
    showStamina.checked = json.gameInfos.showPlayerStamina
    showAbility.checked = json.gameInfos.showPlayerAbility
    showSkills.checked = json.gameInfos.showPlayerSkills
    showGold.checked = json.gameInfos.showPlayerGold
    showInventory.checked = json.gameInfos.showPlayerInventory

    // Game Infos - Colors
    if (json.color) {
        json.color.forEach(element => {
            addColorFromJSON(element)
        });
    }


}

// open JSON file
function openJSON(file) {
    var reader = new FileReader()
    reader.onload = function(e) {
        var json = JSON.parse(e.target.result)
        console.log(json)
        setValueFromJSON(json)
        show('infos')
    };
    reader.readAsText(file)
}
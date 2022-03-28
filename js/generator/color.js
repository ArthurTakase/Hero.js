// let colorList = []
let colorJson = {}
let colorAdvanced = false

function addColor() {
    const liste = document.getElementById('colorList')
    var elem = document.getElementById('ColorElem')
    var color = document.getElementById('ColorColor')

    if (elem.value == "") {return}
    if (jsonLen(colorJson) == 0) {liste.classList.add("table")}
    
    colorJson[elem.value] = color.value
    // colorList = []
    
    liste.innerHTML = '<tr class="tableHeader"><th>Element</th><th>Color</th></tr>'
    for (color in colorJson) {
        liste.innerHTML += '<tr><td>' + color + '</td><td title="' + colorJson[color] + '" style="background: ' + colorJson[color] + '; border-radius: .5rem;"></td></tr>'
    }
}

function advancedColor() {
    const input = document.getElementById('ColorColor')

    if (colorAdvanced) {
        input.setAttribute("type", "color")
        colorAdvanced = false
    } else {
        input.setAttribute("type", "text")
        colorAdvanced = true
    }
}
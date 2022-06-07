// let colorList = []
let colorJson = {}
let colorAdvanced = false

function addColorFromJSON(colorInfos) {
    var lang = localStorage.getItem("lang");
    var elem = language[lang]["ColorTableElement"];
    var col = language[lang]["ColorTableValue"];
    const liste = document.getElementById('colorList')

    if (jsonLen(colorJson) == 0) { liste.classList.add("table") }

    colorJson[colorInfos[0]] = colorInfos[1]

    liste.innerHTML = '<tr class="tableHeader"><th id="ColorElemTable">' + elem + '</th><th id="ColorValueTable">' + col + '</th></tr>'
    for (color in colorJson) {
        liste.innerHTML += '<tr class="' + editValue + ' ' + editValueColor + '"><td>' + color + '</td><td title="' + colorJson[color] + '" style="background: ' + colorJson[color] + '; border-radius: .5rem;"></td></tr>'
    }
}

function addColor() {
    const liste = document.getElementById('colorList')
    var elem = document.getElementById('ColorElem')
    var color = document.getElementById('ColorColor')

    var lang = localStorage.getItem("lang");
    var ele = language[lang]["ColorTableElement"];
    var col = language[lang]["ColorTableValue"];

    if (elem.value == "") { return }
    if (jsonLen(colorJson) == 0) { liste.classList.add("table") }

    colorJson[elem.value] = color.value
        // colorList = []

    liste.innerHTML = '<tr class="tableHeader"><th id="ColorElemTable">' + ele + '</th><th id="ColorValueTable">' + col + '</th></tr>'
    for (color in colorJson) {
        liste.innerHTML += '<tr class="' + editValue + ' ' + editValueColor + '"><td>' + color + '</td><td title="' + colorJson[color] + '" style="background: ' + colorJson[color] + '; border-radius: .5rem;"></td></tr>'
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
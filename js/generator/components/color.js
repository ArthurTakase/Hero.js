let colorJson = {}
let colorAdvanced = false

function updateColorTab() {
    const liste = document.getElementById('colorList')
    var lang = localStorage.getItem("lang");
    var col = language[lang]["ColorTableValue"];
    var elem = language[lang]["ColorTableElement"];

    if (jsonLen(colorJson) == 0) {
        liste.innerHTML = ""
        liste.classList.remove("table")
        return
    }
    if (jsonLen(colorJson) == 1) { liste.classList.add("table") }

    liste.innerHTML = `<tr class="tableHeader"><th id="ColorElemTable">${elem}</th><th id="ColorValueTable">${col}</th></tr>`
    for (color in colorJson) {
        liste.innerHTML += `<tr class="${editValue} ${editValueColor}">
                            <td>${color}</td>
                            <td title="${colorJson[color]}" style="background: ${colorJson[color]}; border-radius: .5rem;"></td></tr>`
    }
}

function addColorFromJSON(colorInfos) {
    colorJson[colorInfos[0]] = colorInfos[1]
    updateColorTab()
}

function addColor() {
    var elem = document.getElementById('ColorElem')
    var color = document.getElementById('ColorColor')

    if (elem.value == "") { return }

    colorJson[elem.value] = color.value

    updateColorTab()
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
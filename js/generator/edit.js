function editColor(div) {
    if (!colorAdvanced) advancedColor()

    const elem = document.getElementById('ColorElem')
    const color = document.getElementById('ColorColor')

    elem.value = div.firstChild.innerHTML
    color.value = div.lastChild.title
}

function editObject(div) {
    var children = div.childNodes

    const pages_div = [
        document.getElementById("objectName"),
        document.getElementById("objectType"),
        document.getElementById("itemAbility"),
        document.getElementById("itemStamina"),
        document.getElementById("itemGold"),
        document.getElementById("itemMeal")
    ]

    for (var i = 0; i < children.length; i++)
        pages_div[i].value = children[i].innerHTML
}
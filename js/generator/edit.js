function editColor(div) {
    if (!colorAdvanced) advancedColor()

    const elem = document.getElementById('ColorElem')
    const color = document.getElementById('ColorColor')

    elem.value = div.firstChild.innerHTML
    color.value = div.lastChild.title
}

function editSkill(div) {
    var children = div.childNodes

    const page_div = [
        document.getElementById("skillName"),
        document.getElementById("skillAbility"),
        document.getElementById("skillStamina")
    ]
    for (i = 0; i < children.length; i++) {
        page_div[i].value = children[i].innerHTML
    }
}
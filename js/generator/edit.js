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

function editPicture(div) {
    const name = document.getElementById("pictureName")
    const url = document.getElementById("pictureURL")

    name.value = div.firstChild.innerHTML
    url.value = div.lastChild.firstChild.src
}

function editSound(div) {
    const name = document.getElementById("soundName")
    const url = document.getElementById("soundURL")
    const volume = document.getElementById("soundVolume")

    name.value = div.childNodes[0].innerHTML
    url.value = div.childNodes[1].firstChild.src
    try { volume.value = ParseInt(div.childNodes[2].innerHTML) } catch { volume.value = 50 }

}
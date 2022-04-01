const modal = document.getElementById('remove-modal')

function removeColor(div) {
    // modal.close()
    modal.style.display = "none"

    const liste = document.getElementById('colorList')

    delete colorJson[div.firstChild.innerHTML]

    if (jsonLen(colorJson) == 0) { liste.innerHTML = "" } else {
        liste.innerHTML = '<tr class="tableHeader"><th>Element</th><th>Color</th></tr>'
        for (color in colorJson) {
            liste.innerHTML += '<tr class="' + editValue + ' ' + editValueColor + '"><td>' + color + '</td><td title="' + colorJson[color] + '" style="background: ' + colorJson[color] + '; border-radius: .5rem;"></td></tr>'
        }
    }

}

function confirmDeletion() {
    if (lastRightClickElement.classList.contains(editValueColor)) removeColor(lastRightClickElement)
        // else if (lastRightClickElement.classList.contains(editValueObject)) editObject(lastRightClickElement)
        // else if (lastRightClickElement.classList.contains(editValuePicture)) editPicture(lastRightClickElement)
        // else if (lastRightClickElement.classList.contains(editValueSound)) editSound(lastRightClickElement)
        // else if (lastRightClickElement.classList.contains(editValueDialog)) editDialog(lastRightClickElement)
        // else if (lastRightClickElement.classList.contains(editValueSkill)) editSkill(lastRightClickElement)
        // else if (lastRightClickElement.classList.contains(editValueButton)) editButton(lastRightClickElement)
}

function showDelete(x, y) {

    // console.log(x, y)

    // modal.showModal()
    modal.style.display = "flex"
    modal.style.top = y + "px"
    modal.style.left = x + "px"
}

// window.addEventListener("keypress", keypressFn, false);

// const modal = document.getElementById('remove-modal')
// modal.showModal()
// mocal.close()
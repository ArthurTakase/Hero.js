const modal = document.getElementById('remove-modal')

function removeColor(div) {
    const liste = document.getElementById('colorList')

    delete colorJson[div.firstChild.innerHTML]

    if (jsonLen(colorJson) == 0) { liste.innerHTML = "" } else {
        liste.innerHTML = '<tr class="tableHeader"><th>Element</th><th>Color</th></tr>'
        for (color in colorJson) {
            liste.innerHTML += '<tr class="' + editValue + ' ' + editValueColor + '"><td>' + color + '</td><td title="' + colorJson[color] + '" style="background: ' + colorJson[color] + '; border-radius: .5rem;"></td></tr>'
        }
    }
}

function removeObject(div) {
    const liste = document.getElementById('objectList')

    delete objectsJson[div.firstChild.innerHTML]

    if (jsonLen(objectsJson) == 0) { liste.innerHTML = "" } else { reloadObjectList(liste) }
    updateObjects()
}

function removePicture(div) {
    const liste = document.getElementById('pictureList')

    delete pictureJson[div.firstChild.innerHTML]

    if (jsonLen(pictureJson) == 0) { liste.innerHTML = "" } else {
        liste.innerHTML = '<tr class="tableHeader"><th>Name</th><th>Preview</th></tr>'
        for (picture in pictureJson) {
            liste.innerHTML += '<tr class="' + editValue + ' ' + editValuePicture + '"><td>' + picture + '</td><td><img class="picture-img" src="' + pictureJson[picture] + '"></td></tr>'
        }
    }
    updatePictures()
}

function removeSound(div) {
    const liste = document.getElementById('soundList')

    delete soundJson[div.firstChild.innerHTML]

    if (jsonLen(soundJson) == 0) { liste.innerHTML = "" } else {
        liste.innerHTML = '<tr class="tableHeader"><th>Name</th><th>Preview</th><th>Volume</th></tr>'
        for (sound in soundJson) {
            liste.innerHTML += '<tr class="' + editValue + ' ' + editValueSound + '"><td>' +
                sound +
                '</td><td><audio controls src="' +
                soundJson[sound][0] +
                '"></audio></td><td>' +
                soundJson[sound][1] +
                '</td></tr>'
        }
    }
    updateSounds()
}

function removeDialog(div) {
    console.log(div)
}

function removeSkill(div) {
    console.log(div)
}

function removeButton(div) {
    console.log(div)
}

function confirmDeletion() {
    modal.style.display = "none"
    if (lastRightClickElement.classList.contains(editValueColor)) removeColor(lastRightClickElement)
    else if (lastRightClickElement.classList.contains(editValueObject)) removeObject(lastRightClickElement)
    else if (lastRightClickElement.classList.contains(editValuePicture)) removePicture(lastRightClickElement)
    else if (lastRightClickElement.classList.contains(editValueSound)) removeSound(lastRightClickElement)
    else if (lastRightClickElement.classList.contains(editValueDialog)) removeDialog(lastRightClickElement)
    else if (lastRightClickElement.classList.contains(editValueSkill)) removeSkill(lastRightClickElement)
    else if (lastRightClickElement.classList.contains(editValueButton)) removeButton(lastRightClickElement)
}

function showDelete(x, y) {
    modal.style.display = "flex"
    modal.style.top = y + "px"
    modal.style.left = x + "px"
}
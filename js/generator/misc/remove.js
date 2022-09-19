const modal = document.getElementById('remove-modal')

function removeColor(div) {
    delete colorJson[div.firstElementChild.innerHTML]
    updateColorTab()
}

function removeObject(div) {
    delete objectsJson[div.firstElementChild.innerHTML]

    console.log(div.firstElementChild.innerHTML)
    reloadObjectList()
    console.log(objectsJson)
    updateObjects()
}

function removePicture(div) {
    delete pictureJson[div.firstElementChild.innerHTML]

    updatePictureList()
    updatePictures()
}

function removeSound(div) {
    delete soundJson[div.firstElementChild.innerHTML]

    updateSoundsList()
    updateSounds()
}

function removeDialog(div) {
    var id = parseInt(div.firstElementChild.innerHTML)

    dialogList.splice(id, 1)
    updateDialogList()
}

function removeSkill(div) {
    delete skillsJson[div.firstElementChild.innerHTML]

    updateSkillsList()
    updateSkills()
}

function removeButton(div) {
    var id = parseInt(div.firstElementChild.innerHTML)

    buttonList.splice(id, 1)

    updateOptionTab()
    Instantpreview()
}

function removeSkillFromPlayer(div) {
    for (skill in playerSkills) {
        if (playerSkills[skill] == div.firstElementChild.innerHTML) {
            playerSkills.splice(skill, 1)
            break
        }
    }

    updatePlayerSkill()
}

function removeObjectFromPlayer(div) {
    for (object in playerObjects) {
        if (playerObjects[object] == div.firstElementChild.innerHTML) {
            playerObjects.splice(object, 1)
            break
        }
    }

    updatePlayerInventory()
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
    else if (lastRightClickElement.classList.contains(editValuePlayerSkill)) removeSkillFromPlayer(lastRightClickElement)
    else if (lastRightClickElement.classList.contains(editValuePlayerInv)) removeObjectFromPlayer(lastRightClickElement)
}

function showDelete(x, y) {
    modal.style.display = "flex"
    modal.style.top = y + "px"
    modal.style.left = x + "px"
}
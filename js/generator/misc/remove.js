const modal = document.getElementById('remove-modal')

function removeColor(div) {
    const liste = document.getElementById('colorList')

    delete colorJson[div.firstChild.innerHTML]

    if (jsonLen(colorJson) == 0) {
        liste.innerHTML = ""
        liste.classList.remove("table")
    } else {
        liste.innerHTML = '<tr class="tableHeader"><th>Element</th><th>Color</th></tr>'
        for (color in colorJson) {
            liste.innerHTML += `<tr class="${editValue} ${editValueColor}"><td>${color}</td><td title="${colorJson[color]}" style="background: ${colorJson[color]}; border-radius: .5rem;"></td></tr>`
        }
    }
}

function removeObject(div) {
    const liste = document.getElementById('objectList')

    delete objectsJson[div.firstChild.innerHTML]

    if (jsonLen(objectsJson) == 2) {
        liste.innerHTML = ""
        liste.classList.remove("table")
    } else { reloadObjectList(liste) }
    updateObjects()
}

function removePicture(div) {
    const liste = document.getElementById('pictureList')

    delete pictureJson[div.firstChild.innerHTML]

    if (jsonLen(pictureJson) == 0) {
        liste.innerHTML = ""
        liste.classList.remove("table")
    } else {
        liste.innerHTML = '<tr class="tableHeader"><th>Name</th><th>Preview</th></tr>'
        for (picture in pictureJson) {
            liste.innerHTML += `<tr class="${editValue} ${editValuePicture}"><td>${picture}</td><td>
                                <img class="picture-img" src="${pictureJson[picture]}"></td></tr>`
        }
    }
    updatePictures()
}

function removeSound(div) {
    const liste = document.getElementById('soundList')

    delete soundJson[div.firstChild.innerHTML]

    if (jsonLen(soundJson) == 0) {
        liste.innerHTML = ""
        liste.classList.remove("table")
    } else {
        liste.innerHTML = '<tr class="tableHeader"><th>Name</th><th>Preview</th><th>Volume</th></tr>'
        for (sound in soundJson) {
            liste.innerHTML += `<tr class="${editValue} ${editValueSound}"><td>${sound}</td>
                                <td><audio controls src="${soundJson[sound][0]}"></audio>
                                </td><td>${soundJson[sound][1]}</td></tr>`
        }
    }
    updateSounds()
}

function removeDialog(div) {
    var id = parseInt(div.firstChild.innerHTML)

    dialogList.splice(id, 1)
    updateDialogList()
}

function removeSkill(div) {
    const liste = document.getElementById('skillsList')

    delete skillsJson[div.firstChild.innerHTML]

    if (jsonLen(skillsJson) == 2) {
        liste.innerHTML = ""
        liste.classList.remove("table")
    } else {
        liste.innerHTML = '<tr class="tableHeader"><th>Name</th><th>Ability</th><th>Stamina</th></tr>'
        for (skill in skillsJson) {
            try {
                liste.innerHTML += `<tr class="${editValue} ${editValueSkill}"><td>${skillsJson[skill].name}</td>
                                    <td>${skillsJson[skill].stats[0]}</td><td>${skillsJson[skill].stats[1]}</td></tr>`
            } catch (e) { continue; }
        }
    }

    updateSkills()
}

function removeButton(div) {
    const liste = document.getElementById('optionsList')
    var id = parseInt(div.firstChild.innerHTML)

    buttonList.splice(id, 1)

    if (buttonList.length == 0) {
        liste.innerHTML = ""
        liste.classList.remove("table")
    } else {
        liste.innerHTML = '<tr class="tableHeader"><th>ID</th><th>Text</th><th>Go To</th></tr>'
        for (button in buttonList) {
            if (buttonList[button].goToIndex == undefined) {
                liste.innerHTML += `<tr class="${editValue} ${editValueButton}"><td>${button}</td>
                                    <td>${buttonList[button].text}</td><td>Next</td></tr>`
            } else {
                liste.innerHTML += `<tr class="${editValue} ${editValueButton}"><td>${button}</td>
                                    <td>${buttonList[button].text}</td>
                                    <td>${buttonList[button].goToIndex}</td></tr>`
            }
        }
    }

    Instantpreview()
}

function removeSkillFromPlayer(div) {
    const liste = document.getElementById('playerSkillsListTable')

    for (skill in playerSkills) {
        if (playerSkills[skill] == div.firstChild.innerHTML) {
            playerSkills.splice(skill, 1)
            break
        }
    }

    if (playerSkills.length == 0) {
        liste.innerHTML = ""
        liste.classList.remove("table")
    } else {
        liste.innerHTML = '<tr class="tableHeader"><th>Name</th></tr>'
        for (skill in playerSkills) { liste.innerHTML += `<tr class="${editValue} ${editValuePlayerSkill}"><td>${playerSkills[skill]}</td></tr>` }
    }
}

function removeObjectFromPlayer(div) {
    const liste = document.getElementById('playerInventoryListTable')

    for (object in playerObjects) {
        if (playerObjects[object] == div.firstChild.innerHTML) {
            playerObjects.splice(object, 1)
            break
        }
    }

    if (playerObjects.length == 0) {
        liste.innerHTML = ""
        liste.classList.remove("table")
    } else {
        liste.innerHTML = '<tr class="tableHeader"><th>Name</th></tr>'
        for (object in playerObjects) { liste.innerHTML += `<tr class="${editValue} ${editValuePlayerInv}"><td>${playerObjects[object]}</td></tr>` }
    }
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
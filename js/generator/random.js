// addObjectFromJSON(element)

let advanced = false

function addDefaultValues() {
    objectsJson["RANDOM_IN_CLASS"] = "RANDOM_IN_CLASS"
    objectsJson["RANDOM_IN_CLASS_UNIQUE"] = "RANDOM_IN_CLASS_UNIQUE"

    skillsJson["RANDOM_IN_CLASS"] = "RANDOM_IN_CLASS"
    skillsJson["RANDOM_IN_CLASS_UNIQUE"] = "RANDOM_IN_CLASS_UNIQUE"

    updateObjects()
}

function switchType(divs, type) {
    if (divs.length == 0) return

    for (var i = 0; i != divs.length; i++)
        divs[i].type = type
}

function toggleAdvanced() {
    advanced = !advanced

    var elems = document.getElementsByClassName("advanced")

    switch (advanced) {
        case true:
            switchType(elems, "text")
            createNotif("Advanced Mode ON", "<i class='bx bx-info-circle'></i> Info")
            break;
        case false:
            switchType(elems, "number")
            createNotif("Advanced Mode OFF", "<i class='bx bx-info-circle'></i> Info")
            break;
    }
}

addDefaultValues()
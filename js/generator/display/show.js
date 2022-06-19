const showInfos = {
    "infos": {
        "sidebar": "infosLink",
        "active": 1,
        "display": [1, 2, 3]
    },
    "infos-display": {
        "sidebar": "infosLink",
        "active": 2,
        "display": [1, 2, 3]
    },
    "infos-color": {
        "sidebar": "infosLink",
        "active": 3,
        "display": [1, 2, 3]
    },
    "data": {
        "sidebar": "dataLink",
        "active": 4,
        "display": [4, 5, 6, 7]
    },
    "data-objects": {
        "sidebar": "dataLink",
        "active": 5,
        "display": [4, 5, 6, 7]
    },
    "data-pictures": {
        "sidebar": "dataLink",
        "active": 6,
        "display": [4, 5, 6, 7]
    },
    "data-sounds": {
        "sidebar": "dataLink",
        "active": 7,
        "display": [4, 5, 6, 7]
    },
    "player": {
        "sidebar": "playerLink",
        "active": 8,
        "display": [8]
    },
    "dialog": {
        "sidebar": "dialogLink",
        "active": 9,
        "display": [9, 10, 11]
    },
    "dialog-list": {
        "sidebar": "dialogLink",
        "active": 10,
        "display": [9, 10, 11]
    },
    "dialog-map": {
        "sidebar": "dialogLink",
        "active": 11,
        "display": [9, 10, 11]
    },
    "index": {
        "sidebar": null,
        "active": 0,
        "display": [0]
    },
}

const headerElements = document.getElementsByClassName("header_element")

function setSideBar(dest) {
    const navLink = document.getElementsByClassName('nav__link')

    for (link in navLink) { try { navLink[link].classList.remove('active') } catch (e) {} }
    try { document.getElementById(showInfos[dest].sidebar).classList.add('active') } catch (e) {}
}

function setHeaderBar(dest) {
    for (let i = 0; i != headerElements.length; i++) {
        try {
            headerElements[i].classList.remove('header_active')
            headerElements[i].style.display = 'none'
        } catch (e) {}
    }
    for (let j = 0; j != showInfos[dest].display.length; j++) {
        try { headerElements[showInfos[dest].display[j]].style.display = 'flex' } catch (e) {}
    }

    try { headerElements[showInfos[dest].active].classList.add('header_active') } catch (e) {}
}

function show(dest) {
    const sections = document.getElementsByTagName('section')
    const toTop = document.getElementById('toTop')

    isMap = false
    toTop.style.display = 'flex'
    setHeaderBar(dest)
    setSideBar(dest)
    if (dest == "player" || dest == "dialog") {
        updateSkills();
        updateObjects()
    }
    if (dest == "dialog") {
        updatePictures();
        updateSounds();
        Instantpreview()
    }
    if (dest == "dialog-list") { updateDialogList() }
    if (dest == "dialog-map") {
        graph();
        toTop.style.display = 'none'
    }
    try {
        for (var i = 0; i != sections.length; i++) { sections[i].style.display = 'none' }
        document.getElementById(dest).style.display = "flex"
    } catch (e) {}
}

function toTop() {
    scroll(0, 0)
}

show("index")
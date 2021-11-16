const headerList = {
    "infos": '<div onclick="show(\'infos\')" class="header_element header_active"><div class="header_text">General</div><div class="header_bottom"></div></div><div onclick="show(\'infos-display\')" class="header_element"><div class="header_text">Display</div><div class="header_bottom"></div></div><div class="header_element" onclick="show(\'infos-color\')"><div class="header_text">Color</div><div class="header_bottom"></div></div>',
    "infos-display": '<div onclick="show(\'infos\')" class="header_element"><div class="header_text">General</div><div class="header_bottom"></div></div><div onclick="show(\'infos-display\')" class="header_element header_active"><div class="header_text">Display</div><div class="header_bottom"></div></div><div class="header_element" onclick="show(\'infos-color\')"><div class="header_text">Color</div><div class="header_bottom"></div></div>',
    "infos-color": '<div onclick="show(\'infos\')" class="header_element"><div class="header_text">General</div><div class="header_bottom"></div></div><div onclick="show(\'infos-display\')" class="header_element"><div class="header_text">Display</div><div class="header_bottom"></div></div><div class="header_element header_active" onclick="show(\'infos-color\')"><div class="header_text">Color</div><div class="header_bottom"></div></div>',
    "data": '<div onclick="show(\'data\')" class="header_element header_active"><div class="header_text">Skills</div><div class="header_bottom"></div></div><div onclick="show(\'data-objects\')" class="header_element"><div class="header_text">Objects</div><div class="header_bottom"></div></div><div class="header_element" onclick="show(\'data-pictures\')"><div class="header_text">Pictures</div><div class="header_bottom"></div></div><div onclick="show(\'data-sounds\')" class="header_element"><div class="header_text">Sounds</div><div class="header_bottom"></div></div>',
    "data-objects": '<div onclick="show(\'data\')" class="header_element"><div class="header_text">Skills</div><div class="header_bottom"></div></div><div onclick="show(\'data-objects\')" class="header_element header_active"><div class="header_text">Objects</div><div class="header_bottom"></div></div><div class="header_element" onclick="show(\'data-pictures\')"><div class="header_text">Pictures</div><div class="header_bottom"></div></div><div onclick="show(\'data-sounds\')" class="header_element"><div class="header_text">Sounds</div><div class="header_bottom"></div></div>',
    "data-pictures": '<div onclick="show(\'data\')" class="header_element"><div class="header_text">Skills</div><div class="header_bottom"></div></div><div onclick="show(\'data-objects\')" class="header_element"><div class="header_text">Objects</div><div class="header_bottom"></div></div><div class="header_element header_active" onclick="show(\'data-pictures\')"><div class="header_text">Pictures</div><div class="header_bottom"></div></div><div onclick="show(\'data-sounds\')" class="header_element"><div class="header_text">Sounds</div><div class="header_bottom"></div></div>',
    "data-sounds": '<div onclick="show(\'data\')" class="header_element"><div class="header_text">Skills</div><div class="header_bottom"></div></div><div onclick="show(\'data-objects\')" class="header_element"><div class="header_text">Objects</div><div class="header_bottom"></div></div><div class="header_element" onclick="show(\'data-pictures\')"><div class="header_text">Pictures</div><div class="header_bottom"></div></div><div onclick="show(\'data-sounds\')" class="header_element header_active"><div class="header_text">Sounds</div><div class="header_bottom"></div></div>',
    "player": '<div onclick="show(\'player\')" class="header_element header_active"><div class="header_text">Player</div><div class="header_bottom"></div></div>',
    "dialog": '<div onclick="show(\'dialog\')" class="header_element header_active"><div class="header_text">Create</div><div class="header_bottom"></div></div><div onclick="show(\'dialog-list\')" class="header_element"><div class="header_text">List</div><div class="header_bottom"></div></div><div class="header_element" onclick="show(\'dialog-map\')"><div class="header_text">Map</div><div class="header_bottom"></div></div>',
    "dialog-list": '<div onclick="show(\'dialog\')" class="header_element"><div class="header_text">Create</div><div class="header_bottom"></div></div><div onclick="show(\'dialog-list\')" class="header_element header_active"><div class="header_text">List</div><div class="header_bottom"></div></div><div class="header_element" onclick="show(\'dialog-map\')"><div class="header_text">Map</div><div class="header_bottom"></div></div>',
    "dialog-map": '<div onclick="show(\'dialog\')" class="header_element"><div class="header_text">Create</div><div class="header_bottom"></div></div><div onclick="show(\'dialog-list\')" class="header_element"><div class="header_text">List</div><div class="header_bottom"></div></div><div class="header_element header_active" onclick="show(\'dialog-map\')"><div class="header_text">Map</div><div class="header_bottom"></div></div>',
    "index": "<div class='header_element header_active' style='font-weight: bold;'>Home</div>"
}

const sidebar = {
    "infos": "infosLink",
    "infos-display": "infosLink",
    "infos-color": "infosLink",
    "data": "dataLink",
    "data-objects": "dataLink",
    "data-pictures": "dataLink",
    "data-sounds": "dataLink",
    "player": "playerLink",
    "dialog": "dialogLink",
    "dialog-list": "dialogLink",
    "dialog-map": "dialogLink",
    "index": null
}

function setHeader(dest) {
    const headerBar = document.getElementById('headerbar')
    
    try {headerBar.innerHTML = headerList[dest]} catch(e) {}
}

function setSideBar(dest) {
    const navLink = document.getElementsByClassName('nav__link')

    for (link in navLink) {try {navLink[link].classList.remove('active')} catch(e) {}}
    try {document.getElementById(sidebar[dest]).classList.add('active')} catch(e) {}
}

function show(dest) {
    const sections = document.getElementsByTagName('section')
    const toTop = document.getElementById('toTop')

    isMap = false
    toTop.style.display = 'flex'
    setHeader(dest)
    setSideBar(dest)
    if (dest == "player" || dest == "dialog") {updateSkills(); updateObjects()}
    if (dest == "dialog") {updatePictures(); updateSounds()}
    if (dest == "dialog-list") {updateDialogList()}
    if (dest == "dialog-map") {graph(); toTop.style.display = 'none'}
    try {
        for (var i = 0; i != sections.length; i++) {sections[i].style.display = 'none'}
        document.getElementById(dest).style.display = "flex" 
    } catch (e) {}
}

function toTop() {
    scroll(0,0)
}

show("index")
// show("player")
// show('dialog-map')
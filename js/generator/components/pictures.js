let pictureJson = {}

function updatePictureList() {
    const liste = document.getElementById('pictureList')
    var lang = localStorage.getItem("lang");
    var ele = language[lang]["Name"];
    var col = language[lang]["Preview"];

    if (jsonLen(pictureJson) == 0) {
        liste.innerHTML = ""
        liste.classList.remove("table")
        return
    }
    if (jsonLen(pictureJson) > 0) { liste.classList.add("table") }

    liste.innerHTML = `<tr class="tableHeader"><th id="PictureElemTable">${ele}</th><th id="PictureValueTable">${col}</th></tr>`
    for (picture in pictureJson) {
        liste.innerHTML += `<tr class="${editValue} ${editValuePicture}"><td>${picture}</td><td><img class="picture-img" src="${pictureJson[picture]}"></td></tr>`
    }

    updatePictures()
}

function addPictureFromJSON(elements) {
    Object.keys(elements).forEach(function(k) {
        var element = elements[k]
        pictureJson[k] = element
    });

    updatePictureList()
}

function addPicture() {
    var pictureName = document.getElementById('pictureName')
    var pictureURL = document.getElementById('pictureURL')

    if (pictureName.value == "" || pictureURL == "") { return }

    pictureJson[pictureName.value] = pictureURL.value

    updatePictureList()

    pictureName.value = ""
    pictureURL.value = ""
    pictureName.focus()
}

function updatePictures() {
    var objectListOption = ""

    for (object in pictureJson) { objectListOption += `<option>${object}</option>` }

    //Ajouter les autres parties à update ici
    const backgroundList = document.getElementById('dialogBackground')
    const pictureList = document.getElementById('dialogImage')
    const startPicture = document.getElementById('startPictureElem')
    const startBackground = document.getElementById('startBackgroundElem')

    var currentStartPicture = startPicture.value
    var currentStartBackground = startBackground.value

    try { pictureList.innerHTML = `<option>No Picture</option>${objectListOption}` } catch (e) {}
    try { backgroundList.innerHTML = `<option>No Background</option>${objectListOption}` } catch (e) {}
    try { startPicture.innerHTML = `<option>No Game Cover</option>${objectListOption}` } catch (e) {}
    try { startBackground.innerHTML = `<option>No Game Illustration</option>${objectListOption}` } catch (e) {}

    if (pictureJson[currentStartPicture] != undefined) { startPicture.value = currentStartPicture } else { startPicture.value = "No Game Cover" }
    if (pictureJson[currentStartBackground] != undefined) { startBackground.value = currentStartBackground } else { startBackground.value = "No Game Illustration" }

}

function uploadPicture(file) {
    fileTo64(file, function(baseImg) {
        pictureJson[file.name.replace(/\.[^/.]+$/, "")] = baseImg.toString()
        updatePictureList()
    })
}
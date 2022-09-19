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
}

function addPictureFromJSON(elements) {
    var array = JSON.stringify(elements).split(',')
    array.forEach(element => {
        var newPicture = element.split(":")
        var name = newPicture[0].replaceAll('"', '')
        name = name.replaceAll('{', '')

        var url = newPicture[1] + ":" + newPicture[2]
        url = url.replaceAll('"', '')
        url = url.replaceAll('}', '')

        pictureJson[name] = url
    })

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

    try { pictureList.innerHTML = `<option>No Picture</option>${objectListOption}` } catch (e) {}
    try { backgroundList.innerHTML = `<option>No Background</option>${objectListOption}` } catch (e) {}
}
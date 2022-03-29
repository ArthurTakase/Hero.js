let pictureJson = {}

function addPictureFromJSON(elements) {
    const liste = document.getElementById('pictureList')

    if (jsonLen(pictureJson) == 0) { liste.classList.add("table") }

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

    liste.innerHTML = '<tr class="tableHeader"><th>Name</th><th>Preview</th></tr>'
    for (picture in pictureJson) {
        liste.innerHTML += '<tr><td>' + picture + '</td><td><a href="' + pictureJson[picture] + '" target="_blank"><img src="' + pictureJson[picture] + '"></a></td></tr>'
    }
}

function addPicture() {
    const liste = document.getElementById('pictureList')
    var pictureName = document.getElementById('pictureName')
    var pictureURL = document.getElementById('pictureURL')

    if (pictureName.value == "" || pictureURL == "") { return }
    if (jsonLen(pictureJson) == 0) { liste.classList.add("table") }

    pictureJson[pictureName.value] = pictureURL.value

    liste.innerHTML = '<tr class="tableHeader"><th>Name</th><th>Preview</th></tr>'
    for (picture in pictureJson) {
        liste.innerHTML += '<tr><td>' + picture + '</td><td><a href="' + pictureJson[picture] + '" target="_blank"><img src="' + pictureJson[picture] + '"></a></td></tr>'
    }

    pictureName.value = ""
    pictureURL.value = ""
    pictureName.focus()
}

function updatePictures() {
    var objectListOption = ""

    for (object in pictureJson) { objectListOption += "<option>" + object + "</option>" }

    //Ajouter les autres parties à update ici
    const backgroundList = document.getElementById('dialogBackground')
    const pictureList = document.getElementById('dialogImage')

    try { pictureList.innerHTML = "<option>No Picture</option>" + objectListOption } catch (e) {}
    try { backgroundList.innerHTML = "<option>No Background</option>" + objectListOption } catch (e) {}
}
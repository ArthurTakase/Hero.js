let pictureJson = {}

function addPicture() {
    const liste = document.getElementById('pictureList')    
    var pictureName = document.getElementById('pictureName')
    var pictureURL = document.getElementById('pictureURL')

    if (pictureName.value == "" || pictureURL == "") {return}
    if (jsonLen(pictureJson) == 0) {liste.classList.add("table")}
    
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

    for (object in pictureJson) {objectListOption += "<option>" + object + "</option>"}

    //Ajouter les autres parties à update ici
    const backgroundList = document.getElementById('dialogBackground')
    const pictureList = document.getElementById('dialogImage')

    try {pictureList.innerHTML = "<option>No Picture</option>" + objectListOption} catch(e) {}
    try {backgroundList.innerHTML = "<option>No Background</option>" + objectListOption} catch(e) {}
}
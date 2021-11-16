let soundJson = {}

function addSound() {
    const liste = document.getElementById('soundList')
    var soundName = document.getElementById('soundName')
    var soundURL = document.getElementById('soundURL')
    var soundVolume = document.getElementById('soundVolume')

    if (soundName.value == "" || soundURL.value == "" || soundVolume.value == "") {return}
    if (jsonLen(soundJson) == 0) {liste.classList.add("table")}
    
    soundJson[soundName.value] = [soundURL.value, parseInt(soundVolume.value) / 100]
    
    liste.innerHTML = '<tr class="tableHeader"><th>Name</th><th>Preview</th><th>Volume</th></tr>'
    for (sound in soundJson) {
        liste.innerHTML +=  '<tr><td>' +
                            sound +
                            '</td><td><audio controls src="' +
                            soundJson[sound][0] +
                            '"></audio></td><td>' +
                            soundJson[sound][1]
                            + '</td></tr>'
    }
    
    soundName.value = ""
    soundURL.value = ""
    soundVolume.value = 50
    soundName.focus()
}

function updateSounds() {
    var objectListOption = ""

    for (object in soundJson) {objectListOption += "<option>" + object + "</option>"}

    //Ajouter les autres parties à update ici
    const musicList = document.getElementById('dialogMusic')
    const soundList = document.getElementById('optionSound')

    try {musicList.innerHTML = "<option>No Music</option>" + objectListOption} catch(e) {}
    try {soundList.innerHTML = "<option>No Sound</option>" + objectListOption} catch(e) {}
}
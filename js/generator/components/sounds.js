let soundJson = {}

function updateSoundsList() {
    const liste = document.getElementById('soundList')
    var lang = localStorage.getItem("lang");
    var name = language[lang]["Name"];
    var preview = language[lang]["Preview"];
    var volume = language[lang]["Volume"];

    if (jsonLen(soundJson) == 0) {
        liste.innerHTML = ""
        liste.classList.remove("table")
        return
    }
    if (jsonLen(soundJson) > 0) { liste.classList.add("table") }

    liste.innerHTML = `<tr class="tableHeader"><th id="SoundNameTable">${name}</th><th id="SoundPreviewTable">${preview}</th><th id="SoundVolumeTable">${volume}</th></tr>`
    for (sound in soundJson) {
        liste.innerHTML += `<tr class="${editValue} ${editValueSound}"><td>${sound}</td><td>
                            <audio controls src="${soundJson[sound][0]}"></audio></td><td>${soundJson[sound][1]}</td></tr>`
    }

}

function addSoundFromJSON(elements) {
    for (var key in elements) { soundJson[key] = elements[key] }

    updateSoundsList()
}

function addSound() {
    var soundName = document.getElementById('soundName')
    var soundURL = document.getElementById('soundURL')
    var soundVolume = document.getElementById('soundVolume')

    if (soundName.value == "" || soundURL.value == "" || soundVolume.value == "") { return }

    soundJson[soundName.value] = [soundURL.value, parseInt(soundVolume.value) / 100]

    updateSoundsList()

    soundName.value = ""
    soundURL.value = ""
    soundVolume.value = 50
    soundName.focus()
}

function updateSounds() {
    var objectListOption = ""

    for (object in soundJson) { objectListOption += `<option>${object}</option>` }

    //Ajouter les autres parties à update ici
    const musicList = document.getElementById('dialogMusic')
    const soundList = document.getElementById('optionSound')

    try { musicList.innerHTML = `<option>No Music</option>${objectListOption}` } catch (e) {}
    try { soundList.innerHTML = `<option>No Sound</option>${objectListOption}` } catch (e) {}
}
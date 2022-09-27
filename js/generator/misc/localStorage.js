var localGame = undefined
const loadSection = document.getElementById('loadSection')
const loadContainer = document.getElementById('loadContainer')

function save() {
    var game = createJSON()

    if (!checkJSON(game)) { return }

    localGame[game.gameInfos.title] = game
    localStorage.setItem("games", JSON.stringify(localGame))

    searchLocalGame()
}

function searchLocalGame() {
    var json = JSON.parse(localStorage.getItem("games"))
    console.log(json)
    loadSection.innerHTML = ""
    if (json == null) {
        localGame = {}
        loadContainer.style.display = "none"
    } else {
        localGame = json
        loadContainer.style.display = "flex"
        Object.keys(localGame).forEach(function(k) { addLocalGame(localGame[k]) });
    }
}

function addLocalGame(json) {
    console.log(json)
    loadSection.innerHTML += `<a class="homeGame" onclick="load('${json.gameInfos.title}')">
                                <img src="${json.gameInfos.previewPicture}" alt="">
                                <div class="homeGameAll">
                                    <div class="homeGameText">${json.gameInfos.title}</div>
                                    <div class="homeGameDate">${json.gameInfos.previewDate}</div>
                                </div>
                            </a>`
}

function load(name) {
    try {
        var json = localGame[name]
        resetAll()
        addDefaultValues()
        setValueFromJSON(json)
        show('infos')
    } catch (e) {}
}


searchLocalGame()
    // localStorage.clear();
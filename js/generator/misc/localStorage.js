var localGame = undefined
const loadSection = document.getElementById('loadSection')
const loadContainer = document.getElementById('loadContainer')

function save() {
    var game = createJSON()

    if (!checkJSON(game)) { return }

    localGame[game.gameInfos.title] = game
    localStorage.setItem("games", JSON.stringify(localGame))

    createNotif(`Saved as '${game.gameInfos.title}'`, "<i class='bx bx-info-circle'></i> Infos")

    searchLocalGame()
}

function searchLocalGame() {
    var json = JSON.parse(localStorage.getItem("games"))
    console.log(json)
    loadSection.innerHTML = ""
    if (json == null || Object.keys(json).length === 0) {
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
    loadSection.innerHTML += `<a class="homeGame">
                                <img src="${json.gameInfos.previewPicture}" onclick="load('${json.gameInfos.title}')">
                                <div class="homeGameAll" onclick="load('${json.gameInfos.title}')">
                                    <div class="homeGameText">${json.gameInfos.title}</div>
                                    <div class="homeGameDate">${json.gameInfos.previewDate}</div>
                                </div>
                                <div class="homeGameDelete" onclick="removeFromLocalGame('${json.gameInfos.title}')"><i class='bx bxs-trash'></i></div>
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

function removeFromLocalGame(name) {
    createNotif(`'${name}' deleted`, "<i class='bx bx-info-circle'></i> Infos")
    delete localGame[name]
    localStorage.setItem("games", JSON.stringify(localGame))
    searchLocalGame()
}

searchLocalGame()
    // localStorage.clear();
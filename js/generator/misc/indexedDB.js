let db = null
var localGame = {}
const loadSection = document.getElementById('loadSection')
const loadContainer = document.getElementById('loadContainer')

// ------------------------------------------------
// DATABASE
// ------------------------------------------------

function createDatabase() {
    const request = indexedDB.open("GameDatabase", 1);

    request.onerror = function(event) {
        console.error("An error occurred with IndexedDB");
        console.error(event);
    };

    request.onupgradeneeded = function() {
        const db = request.result;
        db.createObjectStore("games", { keyPath: "id" });
    };

    request.onsuccess = function() {
        db = request.result;
        const transaction = db.transaction("games", "readwrite");
        transaction.objectStore("games");
        getGameFromDB()
    };
}

function addGameToDB() {
    const transaction = db.transaction("games", "readwrite");
    const store = transaction.objectStore("games");

    var game = createJSON()
    if (!checkJSON(game)) { return }

    localGame[game.gameInfos.title] = game

    createNotif(`Saved as '${game.gameInfos.title}'`, "<i class='bx bx-info-circle'></i> Infos")
    store.put({ id: game.gameInfos.title, game: game })

    getGameFromDB()
}

function getGameFromDB() {
    const transaction = db.transaction("games", "readwrite");
    const store = transaction.objectStore("games");

    const request = store.getAll();

    request.onerror = function(event) {
        console.error("An error occurred with IndexedDB");
        console.error(event);
    };

    request.onsuccess = function() {
        if (request.result && request.result.length > 0) {
            console.log(`${request.result.length} game(s) found in database`);
            loadContainer.style.display = "flex"
            loadSection.innerHTML = ""
            request.result.forEach(function(game) {
                localGame[game.id] = game.game
                addLocalGame(game.game)
            })

        } else {
            console.log("No game found in database");
            loadContainer.style.display = "none"
        }
    };
}

function removeGameFromDB(name) {
    const transaction = db.transaction("games", "readwrite");
    const store = transaction.objectStore("games");

    const request = store.delete(name)
    delete localGame[name]

    request.onerror = function(event) {
        console.error("An error occurred with IndexedDB");
        console.error(event);
    };

    request.onsuccess = function() {
        if (request.result) {
            createNotif(`'${name}' deleted`, "<i class='bx bx-info-circle'></i> Infos")
            getGameFromDB()
        } else {
            loadContainer.style.display = "none"
            getGameFromDB()
        }
    };
}


// ------------------------------------------------
// IMPORT AND EXPORT
// ------------------------------------------------

function addLocalGame(json) {
    loadSection.innerHTML += `<a class="homeGame">
                                <img src="${json.gameInfos.previewPicture}" onclick="load('${json.gameInfos.title}')">
                                <div class="homeGameAll" onclick="load('${json.gameInfos.title}')">
                                    <div class="homeGameText">${json.gameInfos.title}</div>
                                    <div class="homeGameDate">${json.gameInfos.previewDate}</div>
                                </div>
                                <div class="homeGameDelete" onclick="removeGameFromDB('${json.gameInfos.title}')"><i class='bx bxs-trash'></i></div>
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

createDatabase()
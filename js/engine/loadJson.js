function checkStart() {
    var url = new URL(window.location.href);
    var game = url.searchParams.get("game");

    if (game == null) { return }

    fetch(game).then((r) => {
        r.text().then((d) => {
            defaultJSON = JSON.parse(d)
            startMenu(defaultJSON)
        })
    })

}

function initGame(file) {
    var reader = new FileReader();
    reader.onload = function(evt) {
        defaultJSON = JSON.parse(evt.target.result)
        document.body.style.overflow = "hidden"
        startMenu(defaultJSON)
    };
    reader.readAsText(file);
}
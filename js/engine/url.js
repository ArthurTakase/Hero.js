function checkStart() {
    var url = new URL(window.location.href);
    var game = url.searchParams.get("game");

    if (game == null) {return}

    fetch(game).then((r) => {
        r.text().then((d) => {
            defaultJSON = JSON.parse(d)
            initDialog(defaultJSON)
            initGameInfos(defaultJSON)
            initGameplay(defaultJSON)
            initPlayer(defaultJSON)
            initSound(defaultJSON)
            setColor(defaultJSON)
            setDefaultHUD()
            allDialog[currentNumber].show()
        })
    })
    
}
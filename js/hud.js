function showTitle() {
    document.getElementById('hero-js-all').innerHTML += '<div class="hero-js-hud-title">\
                                    <div id="hero-js-game-title">' + gameTitle + '</div>\
                                    <div id="hero-js-game-number">' + currentNumber + '</div>\
                                </div>'
}

function setBackground(img) {
    document.body.style.background = 'url(' + img + ')'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = "center"
}

function setDefaultHUD() {
    document.body.innerHTML += "<div id='hero-js-all' class='hero-js-default'></div>"
}
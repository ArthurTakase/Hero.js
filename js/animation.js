function anime(anime) {
    var div = document.getElementById('hero-js-all')

    div.style.animation = "none"
    
    setTimeout(function() {
        switch (anime) {
            case "victory":
                div.style.animation = 'victory-anime 0.3s ease-in-out'
                break
            case "defeat":
                div.style.animation = 'defeat-anime 1s ease-in-out'
                break
            case "shake":
                div.style.animation = 'shake-anime 0.5s linear'
                dice.style.animation = 'dice-roll-anime 0.3s linear'
                break
            default:
                break
        }
    }, 10);
}
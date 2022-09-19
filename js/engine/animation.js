function anime(anime, div) {
    div.style.animation = "none"

    setTimeout(function() {
        switch (anime) {
            case "jump":
                div.style.animation = 'victory-anime 0.3s ease-in-out'
                break
            case "fadeIn":
                div.style.animation = 'defeat-anime 1s ease-in-out'
                break
            case "shake":
                div.style.animation = 'shake-anime 0.5s linear'
                try { dice.style.animation = 'dice-roll-anime 0.3s linear' } catch (e) {}
                break
            default:
                break
        }
    }, 10);
}
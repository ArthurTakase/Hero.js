class Button {
    constructor(text, goToIndex, condition) {
        this.text = text // str
        this.goToIndex = goToIndex // int
        this.condition = condition // ????
    }
}

function switchDialog(index, condition) {
    if (condition == null) {
        currentNumber = index
        dialog[currentNumber].show(player)
        player.show()
        showTitle()
    } else {
        console.log("Conditions non conformes.")
    }
}
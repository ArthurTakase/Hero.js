let dialogGraphList = ""
let isMap = false

function graph() {
    if (dialogList.length == 0) { return }

    const mapZone = document.getElementById('map_container')
    mapZone.style.padding = "0"
    mapZone.innerHTML = '<div id="previewGraph" style="display: none;"></div><div id="graph"></div>'

    dialogGraphList = "digraph {"
    for (dialog in dialogList) {
        if (dialogList[dialog].buttons == undefined || dialogList[dialog].buttons.length == 0) { dialogGraphList += dialog + "\n" }
        for (button in dialogList[dialog].buttons) {
            if (dialogList[dialog].buttons[button].goToIndex == undefined) { dialogGraphList += dialog + "->" + parseInt(parseInt(dialog) + 1) + "\n" } else { dialogGraphList += dialog + "->" + dialogList[dialog].buttons[button].goToIndex + "\n" }
        }
    }
    dialogGraphList += "}"
    isMap = true

    d3.select("#graph")
        .graphviz()
        .renderDot(dialogGraphList)
        .width(window.innerWidth - 120)
        .height(window.innerHeight - 110)
        .fit(true)
        .fade(true)
}

$(window).resize(function() {
    const graph = document.getElementById('graph')
    if (graph == null || graph == undefined) { return }
    if (isMap == false) { return }

    d3.select("#graph")
        .graphviz()
        .renderDot(dialogGraphList)
        .width(window.innerWidth - 120)
        .height(window.innerHeight - 110)
        .fit(true)
        .fade(true)
});

function nodeAction(node) {
    var id = parseInt(node.querySelector("title").innerHTML)

    try { preview("previewGraph", id) } catch (e) {}
}

function edgeAction(node) {
    var title = node.querySelector("title").innerHTML
    var ids = title.split("-&gt;")
    var dialog = dialogList[parseInt(ids[0])]
    var nbElem = 0
    var index = 0

    for (var i = 0; i != dialog.buttons.length; i++) {
        element = dialog.buttons[i]
        if ((element.goToIndex == undefined && parseInt(ids[0]) + 1 == parseInt(ids[1])) ||
            element.goToIndex == parseInt(ids[1])) {
            index = i
            nbElem++
        }
    }

    // try {
    if (nbElem == 1) {
        preview("previewGraph", parseInt(ids[0]))

        var previewDiv = document.getElementById("previewGraph")
        var editButton = previewDiv.getElementsByClassName("hero-js-button")[index]

        editButton.classList.add("selectedButton")
        editButton.style.border = "solid #be2251 .2rem"
        editButton.style.color = "#be2251"
        editButton.style.backgroundColor = "#be225159"
    }
    // } catch {}
}

document.addEventListener("click", function(e) {
    if (!isMap) { return }
    var div = e.target.parentNode
    try {
        if (div.classList.contains("node")) {
            nodeAction(div)
        } else if (div.classList.contains("edge")) {
            edgeAction(div)
        } else if (e.target.id != "previewGraph") {
            document.getElementById("previewGraph").style.display = "none"
        }
    } catch {
        return;
    }


})
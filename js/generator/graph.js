let dialogGraphList = ""

function graph() {
    const preview = document.getElementById("previewGraph")
    preview.style.display = "none"
	show('dialogGraph')

	dialogGraphList = 'digraph {\nnode [style="filled"]\n'
	for (dialog in dialogList) {
		if (dialogList[dialog].buttons.length == 0) {
			dialogGraphList += dialog + "\n"
		}
		for (button in dialogList[dialog].buttons) {
            if (dialogList[dialog].buttons[button].goToIndex == undefined) {
                var temp = parseInt(dialog) + 1
                dialogGraphList += dialog + "->" + parseInt(temp) + "\n"
            } else {
                dialogGraphList += dialog + "->" + dialogList[dialog].buttons[button].goToIndex + "\n"
            }
        }
	}
	dialogGraphList += "}"
	isMap = true

	d3.select("#graph")
        .graphviz()
            .renderDot(dialogGraphList)
            .width(window.innerWidth / 1.2)
            .height(window.innerHeight / 1.4)
            .fit(true)
            .fade(true)
}

$(window).resize(function() {
    if (!isMap) {return}

	d3.select("#graph")
		.graphviz()
			.renderDot(dialogGraphList)
			.width(window.innerWidth / 1.2)
			.height(window.innerHeight / 1.4)
			.fit(true)
			.fade(true)
});

document.addEventListener("click", function(e) {
	var div = e.target.parentNode
	if (!isMap) {return}
	
    try{if (!div.classList.contains("node")) {return}}
    catch(e) {return}

	var id = parseInt(div.querySelector("title").innerHTML)

	try{preview("previewGraph", id)}
    catch (e) {document.getElementById("previewGraph").style.display = "none"}
})
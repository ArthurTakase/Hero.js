console.log("graph init")
let dialogGraphList = ""

function graph() {
	show('dialogGraph')

	console.log(dialogList)
	dialogGraphList = "digraph {"
	for (dialog in dialogList) {
		if (dialogList[dialog].buttons.length == 0) {
			dialogGraphList += dialog + "\n"
		}
		for (button in dialogList[dialog].buttons)
			dialogGraphList += dialog + "->" + dialogList[dialog].buttons[button].goToIndex + "\n"
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

// récupérer chaque node
// Faire la même chose que pour la carte interactive
// preview du dialog en fonciton du title du node

$(window).resize(function() {
	const graph = document.getElementById('graph')
	if (graph.style.display != "flex") {return}

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
	if (!div.classList.contains("node")) {return}

	var id = parseInt(div.querySelector("title").innerHTML)

	console.log(isMap)
	console.log(div)
	console.log(id)
	console.log("click sur la map")
	try{preview("previewGraph", id)} catch (e) {}
})
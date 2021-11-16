let dialogGraphList = ""
var isMap = false

function graph() {
    if (dialogList.length == 0) {return}

    const mapZone = document.getElementById('map_container')
    mapZone.style.padding = "0"
    mapZone.innerHTML = '<div id="previewGraph" style="display: none;"></div><div id="graph"></div>'

	dialogGraphList = "digraph {"
	for (dialog in dialogList) {
        if (dialogList[dialog].buttons == undefined || dialogList[dialog].buttons.length == 0) {dialogGraphList += dialog + "\n"}
		for (button in dialogList[dialog].buttons) {
            if (dialogList[dialog].buttons[button].goToIndex == undefined) {dialogGraphList += dialog + "->" + parseInt(parseInt(dialog) + 1) + "\n"}
            else {dialogGraphList += dialog + "->" + dialogList[dialog].buttons[button].goToIndex + "\n"}
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
	if (graph == null || graph == undefined) {return}
	if (isMap == false) {return}
	// if (graph.style.display != "flex") {return}
	
	console.log("coucou")

	d3.select("#graph")
		.graphviz()
			.renderDot(dialogGraphList)
			.width(window.innerWidth - 120)
			.height(window.innerHeight - 110)
			.fit(true)
			.fade(true)
});

document.addEventListener("click", function(e) {
	if (!isMap) {return}
	var div = e.target.parentNode
	if (!div.classList.contains("node")) {return}

	var id = parseInt(div.querySelector("title").innerHTML)

	console.log(isMap)
	console.log(div)
	console.log(id)
	console.log("click sur la map")
	try{preview("previewGraph", id)} catch (e) {}
})
const editMenu = document.getElementById("edit-menu")
editMenu.style.display = "none"
var lastRightClickElement = null

let editValue = "edit"
let editValueColor = "edit-color"

document.oncontextmenu = function(e) {
    if (e.target.parentNode.classList.contains("edit")) {
        e.preventDefault();

        editMenu.style.display = "flex"

        editMenu.style.top = e.clientY + "px"
        editMenu.style.left = e.clientX + "px"

        lastRightClickElement = e.target.parentNode
    } else {
        editMenu.style.display = "none"
    }

};

document.onclick = function(e) {
    try {
        if (e.target.parentNode.id == "edit-menu" || e.target.id == "edit-menu") {
            console.log(lastRightClickElement)
            if (lastRightClickElement.classList.contains(editValueColor))
                editColor(lastRightClickElement)

        } else { editMenu.style.display = "none" }
    } catch { editMenu.style.display = "none" }
    editMenu.style.display = "none"
};
const editMenu = document.getElementById("edit-menu")
editMenu.style.display = "none"
var lastRightClickElement = null

let editValue = "edit"
let editValueColor = "edit-color"
let editValueSkill = "edit-skill"
let editValueObject = "edit-object"
let editValuePicture = "edit-picture"
let editValueSound = "edit-sound"
let editValueDialog = "edit-dialog"
let editValueButton = "edit-button"
let editValuePlayerSkill = "edit-player-skill"
let editValuePlayerInv = "edit-player-inv"

let lastX, lastY

document.oncontextmenu = function(e) {
    e.preventDefault();
    try {
        if (e.target.parentNode.classList.contains(editValue)) {
            editMenu.style.display = "flex"

            lastX = e.clientX
            lastY = e.clientY

            editMenu.style.top = lastY + "px"
            editMenu.style.left = lastX + "px"

            lastRightClickElement = e.target.parentNode
        } else { editMenu.style.display = "none" }
    } catch { editMenu.style.display = "none" }

};

document.onclick = function(e) {
    try {
        if (e.target.id == "edit-edit" || (e.target.parentNode && e.target.parentNode.id == "edit-edit")) {
            if (lastRightClickElement.classList.contains(editValueColor)) editColor(lastRightClickElement)
            else if (lastRightClickElement.classList.contains(editValueObject)) editObject(lastRightClickElement)
            else if (lastRightClickElement.classList.contains(editValuePicture)) editPicture(lastRightClickElement)
            else if (lastRightClickElement.classList.contains(editValueSound)) editSound(lastRightClickElement)
            else if (lastRightClickElement.classList.contains(editValueDialog)) editDialog(lastRightClickElement)
            else if (lastRightClickElement.classList.contains(editValueSkill)) editSkill(lastRightClickElement)
            else if (lastRightClickElement.classList.contains(editValueButton)) editButton(lastRightClickElement)
            editMenu.style.display = "none"
        } else if (e.target.parentNode.id == "edit-remove" || e.target.id == "edit-remove") {
            showDelete(lastX, lastY)
        } else {
            editMenu.style.display = "none"
            modal.style.display = "none"
        }
    } catch (e) {}
};

document.onscroll = function(e) {
    editMenu.style.display = "none"
    modal.style.display = "none"
}
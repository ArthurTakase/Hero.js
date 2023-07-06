import { save } from "./Export"

window.addEventListener("keydown", async (e) => {
    if (e.ctrlKey) {
        if (e.key === "s") {
            e.preventDefault()
            await save()
            
        }
    }
})
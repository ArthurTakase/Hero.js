import { data } from "../App"
import { toast } from 'react-toastify'

export function exportJSON() {
    function check() {
        console.log(data)
        try {
            if (!data.general) { return { value: "error", msg: "General is empty" } }
            if (data.general.gameTitle === "") { return { value: "error", msg: "Game title is empty" } }
            if (data.general.firstDialogID == undefined) { return { value: "error", msg: "First dialog ID is empty" } }
    
            return { value: "success", msg: "Exported" }
        }
        catch (e) {
            return { value: "error", msg: "An error occured" }
        }
    }

    const ret = check()
    if (ret.value == "success") {
        const jsonString = `data:text/json;chatset=utf-8,${ encodeURIComponent(JSON.stringify(data)) }`
        const link = document.createElement("a")
        link.href = jsonString
        link.download = `${data.general.gameTitle}.json`
        link.click()

        toast.success(ret.msg, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    } else {
        toast.error(ret.msg, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }
}
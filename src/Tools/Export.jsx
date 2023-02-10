import { data, lang } from "../App"
import { toast } from 'react-toastify'

export function exportJSON() {
    const txt = lang[localStorage.getItem("lang")]

    function check() {
        console.log(data)
        try {
            if (!data.general) { return { value: "error", msg: `"${txt.general}" ${txt.required}` } }
            if (data.general.gameTitle === "") { return { value: "error", msg: `"${txt.gameTitle}" ${txt.required}` } }
            if (data.general.firstDialogID == undefined) { return { value: "error", msg: `"${txt.firstDialogID}" ${txt.required}` } }
    
            return { value: "success", msg: txt.successExport }
        }
        catch (e) {
            return { value: "error", msg: txt.errorExport }
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
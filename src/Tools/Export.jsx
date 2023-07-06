import { data, txt } from "../App"
import { toast } from 'react-toastify'
import { HeroDB } from "./IndexedDB"

function check(success, error) {
    console.log(data)

    try {
        if (data.gameInfos.title === "") { return { value: "error", msg: `"${txt.gameTitle}" ${txt.required}` } }
        if (data.gameInfos.startNumber == undefined) { return { value: "error", msg: `"${txt.firstDialogID}" ${txt.required}` } }

        return { value: "success", msg: success }
    }
    catch (e) {
        return { value: "error", msg: error }
    }
}

export async function save() {
    const saveBtns = document.querySelectorAll('button[fuction="save"]')
    saveBtns.forEach(btn => {
        btn.click()
    })

    const ret = check(txt.successSave, txt.errorSave)
    if (ret.value == "success") {
        await HeroDB.addToDB(data.gameInfos.title, data)
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

export function exportJSON() {
    const ret = check(txt.successExport, txt.errorExport)
    if (ret.value == "success") {
        const jsonString = `data:text/json;chatset=utf-8,${ encodeURIComponent(JSON.stringify(data)) }`
        const link = document.createElement("a")
        link.href = jsonString
        link.download = `${data.gameInfos.title}.json`
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
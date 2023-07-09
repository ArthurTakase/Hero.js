import { data, txt, notif } from "../App"

function check(success, error) {
  try {
    console.log(data)
    if (data.gameInfos.title === "") { return { value: "error", msg: `"${txt.gameTitle}" ${txt.required}` } }
    if (data.gameInfos.startNumber === undefined) { return { value: "error", msg: `"${txt.firstDialogID}" ${txt.required}` } }

    return { value: "success", msg: success }
  }
  catch (e) {
    return { value: "error", msg: error }
  }
}

function saveAll() {
  const saveBtns = document.querySelectorAll('button[fuction="save"]')
  saveBtns.forEach(btn => {
    btn.click()
  })
}

export async function save() {
  saveAll()
  notif(() => check(txt.successSave, txt.errorSave))
}

export function exportJSON() {
  saveAll()
  const ret = check(txt.successExport, txt.errorExport)
  if (ret.value == "success") {
    const jsonString = `data:text/json;chatset=utf-8,${ encodeURIComponent(JSON.stringify(data)) }`
    const link = document.createElement("a")
    link.href = jsonString
    link.download = `${data.gameInfos.title}.json`
    link.click()
  }
  notif(() => ret)
}
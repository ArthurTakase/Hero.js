import { data, txt, notif } from "../App"
import { HeroDB } from './IndexedDB'

function check(success, error) {
  try {
    console.log(data)
    if (data.gameInfos.title === "") { return { value: "error", msg: `"${txt('genaral.gameTitle')}" ${txt('misc.required')}` } }
    if (data.gameInfos.startNumber === undefined) { return { value: "error", msg: `"${txt('general.firstDialogID')}" ${txt('misc.required')}` } }

    return { value: "success", msg: success }
  }
  catch (e) {
    return { value: "error", msg: e }
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
  try {
    await HeroDB.addToDB(data.gameInfos.title, data)
  } catch (e) {
    return notif(() => {return { value: "error", msg: txt('error.onSave') }})
  }
  notif(() => check(txt('success.onSave'), txt('error.onSave')))
}

export function exportJSON() {
  saveAll()
  const ret = check(txt('error.export'), txt('error.export'))
  if (ret.value == "success") {
    const jsonString = `data:text/json;chatset=utf-8,${ encodeURIComponent(JSON.stringify(data)) }`
    const link = document.createElement("a")
    link.href = jsonString
    link.download = `${data.gameInfos.title}.json`
    link.click()
  }
  notif(() => ret)
}
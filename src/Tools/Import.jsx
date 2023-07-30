import { states, refs, data, notif, txt } from '../App'
import { reload_pictures, reload_sounds } from '../Pages/Assets'
import { reload_inventory, reload_objects, reload_variables } from '../Pages/Player'
import { resetDialog } from '../Pages/Dialog/Dialog'

export default function importGame(load_data) {
  try {
    // import data
    data.gameInfos = load_data.gameInfos
    data.data = load_data.data
    data.player = load_data.player

    // set inputs
    refs.input.general.gameTitle.current.value = data.gameInfos.title
    refs.input.general.firstDialogID.current.value = data.gameInfos.startNumber

    // set interface
    reload_pictures()
    reload_sounds()
    reload_inventory()
    reload_objects()
    reload_variables()

    // set dialog
    resetDialog()

    states.set.setOpen(false)

    console.log(data)

    notif(() => { return { value: "success", msg: txt('success.import') } })
  } catch (e) {
    notif(() => { return { value: "error", msg: txt('error.import') } })
    console.log(e)
  }
}
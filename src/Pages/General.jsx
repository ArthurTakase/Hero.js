import Header from '../Components/Header'
import { Input } from '../Components/Input'
import { data, txt, refs } from '../App'
import '../scss/window_behavior.scss'

export default function General() {
  function save() {
    try {
      if (refs.input.general.gameTitle.current.value == "") { return { value: "error", msg: `"${txt('general.gameTitle')}" ${txt('misc.required')}` } }
      if (refs.input.general.firstDialogID.current.value == "") { return { value: "error", msg: `"${txt('general.firstDialogID')}" ${txt('misc.required')}` } }
      
      data.gameInfos.title = refs.input.general.gameTitle.current.value
      data.gameInfos.startNumber = parseInt(refs.input.general.firstDialogID.current.value)
    }
    catch (e) {
      return { value: "error", msg: txt('error.onSave') }
    }
  }

  return (
    <>
    <Header title={txt('general.title')} saveFunc={save} />
    <div className="general content" ref={refs.window.general}>
      <Input type="text" placeholder={txt('general.gameTitle')} label={txt('general.gameTitle')} r={refs.input.general.gameTitle} required={true} />
      <Input type="number" placeholder={txt('general.firstDialogID')} label={txt('general.firstDialogID')} r={refs.input.general.firstDialogID} required={true} value={0} />
      {/* TODO
        - Mettre les deux inputs dans un sous groupe
        - Ajouter un sous groupe pour personnaliser le css (met à jour en temps réel sur la preview) 
      */}
    </div>
    </>
  )
}
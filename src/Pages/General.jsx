import Header from '../Components/Header'
import { Input } from '../Components/Input'
import { data, lang } from '../App'
import '../scss/window_behavior.scss'

export default function General({ refs }) {
    const txt = lang[localStorage.getItem("lang")]

    function save() {
        try {
            if (refs.input.general.gameTitle.current.value == "") { return { value: "error", msg: `"${txt.gameTitle}" ${txt.required}` } }
            if (refs.input.general.firstDialogID.current.value == "") { return { value: "error", msg: `"${txt.firstDialogID}" ${txt.required}` } }
            
            data.gameInfos.title = refs.input.general.gameTitle.current.value
            data.gameInfos.startNumber = parseInt(refs.input.general.firstDialogID.current.value)
            data.gameInfos.defeatNumber = parseInt(refs.input.general.defeatDialogID.current.value)
            data.gameInfos.MaxDice = parseInt(refs.input.general.MaxDice.current.value)
            data.gameInfos.MaxSkills = parseInt(refs.input.general.MaxSkill.current.value)

            return { value: "success", msg: txt.successSave }
        }
        catch (e) {
            return { value: "error", msg: txt.errorSave }
        }
    }

    return (
        <>
        <Header title="General" saveFunc={save} />
        <div className="general content" ref={refs.window.general}>
            <Input type="text" placeholder={txt.gameTitle} label={txt.gameTitle} r={refs.input.general.gameTitle} required={true} />
            <Input type="number" placeholder={txt.firstDialogID} label={txt.firstDialogID} r={refs.input.general.firstDialogID} required={true} value={0} />
            <Input type="number" placeholder={txt.defeatDialogID} label={txt.defeatDialogID} r={refs.input.general.defeatDialogID} />
            <Input type="number" placeholder={txt.maxDiceValue} label={txt.maxDiceValue} r={refs.input.general.MaxDice} />
            <Input type="number" placeholder={txt.maxSkill} label={txt.maxSkill} r={refs.input.general.MaxSkill} />
        </div>
        </>
    )
}
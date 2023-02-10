import Window from '../Components/Window'
import { Input } from '../Components/Input'
import { data, lang } from '../App'
import '../scss/general.scss'

export default function General({ refs }) {
    const txt = lang[localStorage.getItem("lang")]

    function save() {
        try {
            if (refs.input.general.gameTitle.current.value == "") { return { value: "error", msg: `"${txt.gameTitle}" ${txt.required}` } }
            if (refs.input.general.firstDialogID.current.value == "") { return { value: "error", msg: `"${txt.firstDialogID}" ${txt.required}` } }
            
            data.general = {}
            data.general.gameTitle = refs.input.general.gameTitle.current.value
            data.general.firstDialogID = parseInt(refs.input.general.firstDialogID.current.value)
            data.general.defeatDialogID = parseInt(refs.input.general.defeatDialogID.current.value)
            data.general.MaxDice = parseInt(refs.input.general.MaxDice.current.value)
            data.general.MaxSkill = parseInt(refs.input.general.MaxSkill.current.value)

            return { value: "success", msg: txt.successSave }
        }
        catch (e) {
            return { value: "error", msg: txt.errorSave }
        }
    }

    return (
        <Window title="General" r={refs.window.general} refs={refs} saveFunc={save}>
            <div className="general">
                <Input type="text" placeholder={txt.gameTitle} label={txt.gameTitle} r={refs.input.general.gameTitle} required={true} />
                <Input type="number" placeholder={txt.firstDialogID} label={txt.firstDialogID} r={refs.input.general.firstDialogID} required={true} value={0} />
                <Input type="number" placeholder={txt.defeatDialogID} label={txt.defeatDialogID} r={refs.input.general.defeatDialogID} />
                <Input type="number" placeholder={txt.maxDiceValue} label={txt.maxDiceValue} r={refs.input.general.MaxDice} />
                <Input type="number" placeholder={txt.maxSkill} label={txt.maxSkill} r={refs.input.general.MaxSkill} />
            </div>
        </Window>
    )
}
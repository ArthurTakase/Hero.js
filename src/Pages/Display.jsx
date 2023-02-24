import Header from '../Components/Header'
import { data, lang } from '../App'
import '../scss/window_behavior.scss'
import { Checkbox } from '../Components/Input'

export default function Display({ refs }) {
    const txt = lang[localStorage.getItem("lang")]

    function save() {
        try {
            data.gameInfos.showPlayerStamina = refs.input.display.showVar.current.checked
            data.gameInfos.showPlayerInventory = refs.input.display.showInventory.current.checked

            return { value: "success", msg: txt.successSave }
        } catch (e) {
            return { value: "error", msg: txt.errorSave }
        }
    }

    return (
        <>
        <Header title="Display" saveFunc={save}/>
        <div className="display content" ref={refs.window.display}>
            <Checkbox label="Show Variables" r={refs.input.display.showVar} id="showVar" />
            <Checkbox label="Show Inventory" r={refs.input.display.showInventory} id="showInventory" />
        </div>
        </>
    )
}
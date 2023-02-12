import Header from '../Components/Header'
import { data, lang } from '../App'
import '../scss/window_behavior.scss'
import { Checkbox } from '../Components/Input'

export default function Display({ refs }) {
    const txt = lang[localStorage.getItem("lang")]

    function save() {
        try {
            data.gameInfos.showPlayerStamina = refs.input.display.showStamina.current.checked
            data.gameInfos.showPlayerAbility = refs.input.display.showAbility.current.checked
            data.gameInfos.showPlayerSkills = refs.input.display.showSkills.current.checked
            data.gameInfos.showPlayerGold = refs.input.display.showGold.current.checked
            data.gameInfos.showPlayerInventory = refs.input.display.showInventory.current.checked

            return { value: "success", msg: txt.successSave }
        } catch (e) {
            return { value: "error", msg: txt.errorSave }
        }
    }

    return (
        <>
        <Header title="Display" r={refs.window.display} saveFunc={save}/>
        <div className="display content" ref={refs.window.display}>
            <Checkbox label="Show Stamina" r={refs.input.display.showStamina} id="showStamina" />
            <Checkbox label="Show Ability" r={refs.input.display.showAbility} id="showAbility" />
            <Checkbox label="Show Skills" r={refs.input.display.showSkills} id="showSkills" />
            <Checkbox label="Show Gold" r={refs.input.display.showGold} id="showGold" />
            <Checkbox label="Show Inventory" r={refs.input.display.showInventory} id="showInventory" />
        </div>
        </>
    )
}
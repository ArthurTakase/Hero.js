import Window from '../Components/Window';
import { Input } from '../Components/Input';
import { data } from '../App';
import '../scss/general.scss';

export default function General({ refs }) {
    return (
        <Window title="General" r={refs.window.general} refs={refs} saveFunc={() => {
            try {
                if (refs.input.general.gameTitle.current.value == "") { return { value: "error", msg: "Game Title is required" } }
                if (refs.input.general.firstDialogID.current.value == "") { return { value: "error", msg: "First Dialog ID is required" } }
                
                data.general = {}
                data.general.gameTitle = refs.input.general.gameTitle.current.value
                data.general.firstDialogID = parseInt(refs.input.general.firstDialogID.current.value)
                data.general.defeatDialogID = parseInt(refs.input.general.defeatDialogID.current.value)
                data.general.MaxDice = parseInt(refs.input.general.MaxDice.current.value)
                data.general.MaxSkill = parseInt(refs.input.general.MaxSkill.current.value)
    
                return { value: "success", msg: "Sauvegardé avec succès" }
            }
            catch (e) {
                return { value: "error", msg: "Une erreur est survenue lors de la sauvegarde" }
            }
        }}>
            <div className="general">
                <Input type="text" placeholder="Game Title" label="Game Title" r={refs.input.general.gameTitle} required={true} />
                <Input type="number" placeholder="First Dialog ID" label="First Dialog ID" r={refs.input.general.firstDialogID} required={true} />
                <Input type="number" placeholder="Defeat Dialog ID" label="Defeat Dialog ID" r={refs.input.general.defeatDialogID} />
                <Input type="number" placeholder="Max Dice Value (for random number generation)" label="Max Dice Value" r={refs.input.general.MaxDice} />
                <Input type="number" placeholder="Max number of skills for the player" label="Max number of skills" r={refs.input.general.MaxSkill} />
            </div>
        </Window>
    )
}
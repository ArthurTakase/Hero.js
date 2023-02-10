import Window from '../Components/Window';
import { Input } from '../Components/Input';
import '../scss/general.scss';

export default function General({ refs }) {
    return (
        <Window title="General" r={refs.window.general} refs={refs}>
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
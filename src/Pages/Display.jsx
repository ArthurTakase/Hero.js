import Window from '../Components/Window';

export default function Display({ refs }) {
    return (
        <Window title="Display" r={refs.display} refs={refs}>
            <div>Display</div>
        </Window>
    )
}
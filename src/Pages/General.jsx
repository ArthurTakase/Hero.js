import Window from '../Components/Window';

export default function General({ refs }) {
    return (
        <Window title="General" r={refs.general} refs={refs}>
            <div>General</div>
        </Window>
    )
}
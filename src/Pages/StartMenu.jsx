import Window from '../Components/Window'

export default function StartMenu({ refs }) {
    return (
        <Window title="StartMenu" r={refs.window.startMenu} refs={refs}>
            <div>StartMenu</div>
        </Window>
    )
}
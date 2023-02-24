import { lang } from '../App'
import '../scss/window_behavior.scss'
import { exportJSON } from "../Tools/Export"

export default function File({ refs }) {
    const txt = lang[localStorage.getItem("lang")]

    function changeLanguage() {
        if (confirm(txt.warning_translate)) {
            if (localStorage.getItem("lang") === "en") { localStorage.setItem("lang", "fr") }
            else { localStorage.setItem("lang", "en") }
            window.location.reload()
        }
    }

    return (
        <>
        <div className="file content" ref={refs.window.general}>
            <button className="WIP" title={txt.new}><i className='bx bxs-file-plus'></i></button>
            <button className="WIP" title={txt.save}><i className='bx bx-save'></i></button>
            <button className="WIP" title={txt.import}><i className='bx bx-import'></i></button>
            <button title={txt.export} onClick={() => { exportJSON() }}><i className='bx bx-export'></i></button>
            <button className="WIP" title={txt.browser_projects}><i className='bx bx-cloud'></i></button>
            <button className="WIP" title={txt.theme}><i className='bx bxs-palette'></i></button>
            <button onClick={changeLanguage} title={txt.language}>{
                localStorage.getItem("lang") === "en" ? "🇫🇷" : "🇬🇧"
            }</button>
        </div>
        </>
    )
}
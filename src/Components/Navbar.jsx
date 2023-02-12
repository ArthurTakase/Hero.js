import { lang } from "../App"
import { exportJSON } from "../Tools/Export"
import "../scss/navbar.scss"

export default function Navbar({ refs }) {
    const txt = lang[localStorage.getItem("lang")]

    function changeLanguage() {
        if (confirm(txt["warning_translate"])) {
            if (localStorage.getItem("lang") === "en") { localStorage.setItem("lang", "fr") }
            else { localStorage.setItem("lang", "en") }
            window.location.reload()
        }
    }

    function openWindow(ref) {
        ref.current.parentNode.style.display = "block"
    }

    return (
        <nav>
            <article>
                <div className="navTitle">{txt.files}<i className='bx bx-chevron-down'></i></div>
                <div className="dropdown">
                    <button className="WIP"><i className='bx bxs-file-plus'></i> {txt.new}</button>
                    <button className="WIP"><i className='bx bx-save'></i> {txt.save}</button>
                    <button className="WIP"><i className='bx bx-import'></i> {txt.import}</button>
                    <button onClick={() => { exportJSON() }}><i className='bx bx-export'></i> {txt.export}</button>
                    <button className="WIP"><i className='bx bx-cloud'></i> {txt.browser_projects}</button>
                    <button className="WIP"><i className='bx bxs-palette'></i> {txt.theme}</button>
                    <button onClick={changeLanguage}><i className='bx bxs-flag-alt'></i> {txt.language}</button>
                </div>
            </article>
            <article>
                <div className="navTitle">{txt.project}<i className='bx bx-chevron-down'></i></div>
                <div className="dropdown">
                    <button onClick={() => { openWindow(refs.window.general) }} >{txt.general}</button>
                    <button className="WIP" >{txt.startMenu}</button>
                    <button onClick={() => { openWindow(refs.window.display) }} >{txt.display}</button>
                    <button className="WIP">{txt.style}</button>
                </div>
            </article>
            <article>
                <div className="navTitle" onClick={() => { openWindow(refs.window.picture) }}>{txt.pictures}</div>
            </article>
            <article>
                <div className="navTitle WIP">{txt.sounds}</div>
            </article>
            <article>
                <div className="navTitle WIP">{txt.skills}</div>
            </article>
            <article>
                <div className="navTitle WIP">{txt.items}</div>
            </article>
            <article>
                <div className="navTitle WIP">{txt.player}</div>
            </article>
        </nav>
    )
}
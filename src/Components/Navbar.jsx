import { lang } from "../App";
import "../scss/navbar.scss"

export default function Navbar() {
    const txt = lang[localStorage.getItem("lang")];

    function changeLanguage() {
        if (localStorage.getItem("lang") === "en") { localStorage.setItem("lang", "fr") }
        else { localStorage.setItem("lang", "en") }
        window.location.reload();
    }

    return (
        <nav>
            <article>
                <div className="navTitle">{txt.files}<i className='bx bx-chevron-down'></i></div>
                <div className="dropdown">
                    <button className="WIP"><i className='bx bxs-file-plus'></i> {txt.new}</button>
                    <button className="WIP"><i className='bx bx-save'></i> {txt.save}</button>
                    <button className="WIP"><i className='bx bx-import'></i> {txt.import}</button>
                    <button className="WIP"><i className='bx bx-export'></i> {txt.export}</button>
                    <button className="WIP"><i className='bx bxs-palette'></i> {txt.theme}</button>
                    <button onClick={changeLanguage}><i className='bx bxs-flag-alt'></i> {txt.language}</button>
                </div>
            </article>
            <article>
                <div className="navTitle">{txt.project}<i className='bx bx-chevron-down'></i></div>
                <div className="dropdown">
                    <button className="WIP">{txt.general}</button>
                    <button className="WIP">{txt.startMenu}</button>
                    <button className="WIP">{txt.display}</button>
                    <button className="WIP">{txt.style}</button>
                </div>
            </article>
            <article>
                <div className="navTitle">{txt.pictures}<i className='bx bx-chevron-down'></i></div>
                <div className="dropdown">
                    <button className="WIP">{txt.list}</button>
                    <button className="WIP">{txt.add}</button>
                </div>
            </article>
            <article>
                <div className="navTitle">{txt.sounds}<i className='bx bx-chevron-down'></i></div>
                <div className="dropdown">
                    <button className="WIP">{txt.list}</button>
                    <button className="WIP">{txt.add}</button>
                </div>
            </article>
            <article>
                <div className="navTitle">{txt.skills}<i className='bx bx-chevron-down'></i></div>
                <div className="dropdown">
                    <button className="WIP">{txt.list}</button>
                    <button className="WIP">{txt.add}</button>
                </div>
            </article>
            <article>
                <div className="navTitle">{txt.items}<i className='bx bx-chevron-down'></i></div>
                <div className="dropdown">
                    <button className="WIP">{txt.list}</button>
                    <button className="WIP">{txt.add}</button>
                </div>
            </article>
            <article>
                <div className="navTitle WIP">{txt.player}</div>
            </article>
        </nav>
    )
}
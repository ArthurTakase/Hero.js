import React, { useRef } from 'react';
import Navbar from './Components/Navbar';
import Window from './Components/Window';
import en_translate from "./Translate/en.json";
import fr_translate from "./Translate/fr.json";

export const lang = {
    en: en_translate,
    fr: fr_translate
}

export default function App() {
    const txt = lang[localStorage.getItem("lang")];
    const refs = {
        general: useRef(null),
        startMenu: useRef(null),
        display: useRef(null)
    }

    return (
        <>
            <Navbar refs={refs} />
            <Window title={txt.general} r={refs.general}>
                <div>{txt.welcome}</div>
            </Window>
            <Window title={txt.startMenu} r={refs.startMenu}>
                <div>{txt.welcome}</div>
            </Window>
            <Window title={txt.display} r={refs.display}>
                <div>{txt.welcome}</div>
            </Window>
        </>
    )
}
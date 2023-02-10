import React, { useRef } from 'react';
import Navbar from './Components/Navbar';
import Display from './Pages/Display';
import General from './Pages/General';
import StartMenu from './Pages/StartMenu';
import en_translate from "./Translate/en.json";
import fr_translate from "./Translate/fr.json";

export const lang = {
    en: en_translate,
    fr: fr_translate
}

export default function App() {
    const txt = lang[localStorage.getItem("lang")];
    const refs = {
        window: {
            general: useRef(null),
            startMenu: useRef(null),
            display: useRef(null)
        },
        input: {
            general: {
                gameTitle: useRef(null),
                firstDialogID: useRef(null),
                defeatDialogID: useRef(null),
                MaxDice: useRef(null),
                MaxSkill: useRef(null)
            }
        }
    }

    return (
        <>
            <Navbar refs={refs} />
            <General refs={refs} />
            <StartMenu refs={refs} />
            <Display refs={refs} />
        </>
    )
}
import React, { useRef } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './Components/Navbar'
import Display from './Pages/Display'
import General from './Pages/General'
import StartMenu from './Pages/StartMenu'

import en_translate from "./Translate/en.json"
import fr_translate from "./Translate/fr.json"

export const lang = {
    en: en_translate,
    fr: fr_translate
}

export const data = {}

export default function App() {
    const txt = lang[localStorage.getItem("lang")]
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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Navbar refs={refs} />
            <General refs={refs} />
            <StartMenu refs={refs} />
            <Display refs={refs} />
        </>
    )
}
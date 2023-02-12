import React, { useRef } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './Components/Navbar'
import Grid from './Components/Grid'

import en_translate from "./Translate/en.json"
import fr_translate from "./Translate/fr.json"

export const lang = {
    en: en_translate,
    fr: fr_translate
}

export const data = {
    gameInfos: {},
    data: {
        pictures: {}
    }
}

export default function App() {
    const txt = lang[localStorage.getItem("lang")]
    const refs = {
        window: {
            general: useRef(null),
            display: useRef(null),
            picture: useRef(null),
        },
        input: {
            general: {
                gameTitle: useRef(null),
                firstDialogID: useRef(null),
                defeatDialogID: useRef(null),
                MaxDice: useRef(null),
                MaxSkill: useRef(null)
            },
            display: {
                showStamina: useRef(null),
                showAbility: useRef(null),
                showSkills: useRef(null),
                showGold: useRef(null),
                showInventory: useRef(null),
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
            <Grid refs={refs} data={data} />
        </>
    )
}
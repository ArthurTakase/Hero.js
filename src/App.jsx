import React, { useRef, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Grid from './Components/Grid'
import Modal from './Components/Modal'

import en_translate from "./Translate/en.json"
import fr_translate from "./Translate/fr.json"

export const lang = {
    en: en_translate,
    fr: fr_translate
}

export const data = {
    gameInfos: {},
    data: {
        pictures: {},
        sounds: {},
    }
}

export default function App() {
    const refs = {
        window: {
            general: useRef(null),
            display: useRef(null),
            assets: useRef(null),
        },
        input: {
            general: {
                gameTitle: useRef(null),
                firstDialogID: useRef(null),
                defeatDialogID: useRef(null),
                MaxDice: useRef(null),
                MaxSkill: useRef(null),
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

    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState(<></>);

    const states = {
        set: {
            setOpen: setOpen,
            setModalContent: setModalContent
        },
        get: {
            open: open,
            modalContent: modalContent
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
            <Grid refs={refs} data={data} states={states} />
            <Modal states={states}  />
        </>
    )
}
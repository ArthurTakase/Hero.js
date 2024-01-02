import { useRef, useState } from 'react'

import { data, txt, states, refs } from '../App'
import Header from '../Components/Header'

import '../scss/window_behavior.scss'

export const optionsList = []

/*

ELEMENTS DE CHAQUE OPTION

Button Body (texte de l'option)
Go to (ID de la prochaine page), par défaut, la page suivante
Effet sonore (nom du son à jouer) (volume)

Ajoute une condition
VARIABLE (nom de la variable) (opérateur > <) (valeur)
INVENTORY (nom de l'objet) (possède / ne possède pas)
INPUT (valeur attendue)

Ajouter un effet
VARIABLE (nom de la variable) (opérateur + - / =) (valeur)
INVENTORY (nom de l'objet) (ajouter / retirer)
RESTART (recommencer le dialogue)

Notifications
Texte (texte à afficher)
Enable (toggle)

*/

export function Option({optionID})
{
    const optionInfos = optionsList[optionID]
    const optionRef = useRef(null)

    function showOptionInfos()
    {
        alert('clicked')
    }

    return (
        <button className='option' ref={optionRef} onClick={showOptionInfos}>
            {optionInfos.optionName}
        </button>
    )
}

export default function Options({}) {
    const [options, setOptions] = useState(<>{txt("misc.empty")}</>)
    states.get.options = options
    states.set.options = setOptions

    const optionNameRef = useRef(null)
    const optionTextRef = useRef(null)

    function saveNewOption()
    {
        const optionName = optionNameRef.current.value
        const optionText = optionTextRef.current.value
        const optionID = optionsList.length
        states.set.options(<>
            {optionsList.length > 0 ? states.get.options : <></>}
            <Option optionID={optionID} />
        </>)
        optionsList.push({optionName, optionText, optionID})
        states.set.setOpen(false)
    }

    function newOptionModal()
    {
        states.set.setModalContent(
            <>
                <h1>New Dialog Option</h1>
                <input type="text" placeholder="Option name" ref={optionNameRef} />
                <input type="text" placeholder="Option text" ref={optionTextRef} />
                <button onClick={saveNewOption}>Save</button>
            </>
        )
        states.set.setOpen(true)
    }

    return (
        <>
        <Header title="Option du dialogue" func={newOptionModal} funcIcon="bx bx-plus"/>
        <div className="options content" ref={refs.window.map}>
            {options}
        </div>
        </>
    )
}
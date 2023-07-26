import Header from '../Components/Header'
import { data, txt, refs, states } from '../App'
import FullpageSelect from '../Components/Select'
import '../scss/window_behavior.scss'

import { useState, useEffect } from 'react'

export function resetDialog() {
  states.set.background(<></>) // ! Erreur ici ?
}

export default function Dialog() {
  const [background, setBackground] = useState(<></>)
  const [btnBackground, setBtnBackground] = useState(
    <button data-tooltip={txt('dialog.setBackground')} className="btnBackground"
      onClick={() => FullpageSelect(data.data.pictures, 'img', (element) => {
        if (element === null) setBackground(<></>)
        else setBackground(<img className="dialogBackground" src={element[1]} alt={element[0]}></img>)
        states.set.setOpen(false)
        // TODO: Mettre à jour les data du dialog
      })}
    ></button>
  )
  
  useEffect(() => {
    states.get.background = background
    states.set.background = setBackground
    states.get.btnBackground = btnBackground
    states.set.btnBackground = setBtnBackground
  }, [background, setBackground, btnBackground, setBtnBackground])

  return (
    <>
    <Header title={txt('dialog.title')} />
    <div className="dialog content" ref={refs.window.dialog}>
      {background}
      {btnBackground}
    </div>
    </>
  )
}


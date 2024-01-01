import Header from '../../Components/Header'
import { data, txt, refs, states } from '../../App'
import '../../scss/window_behavior.scss'
import Background from './Background'
import Characters from './Characters'
import Bubble from './Bubble'

import { useState, useRef } from 'react'

export function resetDialog() {
  states.set.background(<></>)
  states.set.leftCharacter(<></>)
  states.set.rightCharacter(<></>)
  states.set.character(<></>)
  states.set.bubble(<></>)
  // supprimer les boutons show/hide des personnages
}

export default function Dialog() {
  const [background, setBackground] = useState(<></>)
  states.get.background = background
  states.set.background = setBackground

  const [btnBackground, setBtnBackground] = useState(<Background />)
  states.get.btnBackground = btnBackground
  states.set.btnBackground = setBtnBackground

  const [leftCharacter, setLeftCharacter] = useState(<></>)
  states.get.leftCharacter = leftCharacter
  states.set.leftCharacter = setLeftCharacter
  refs.leftCharacter = useRef(null)

  const [btnLeftCharacter, setBtnLeftCharacter] = useState(<Characters position="left" setCharacter={setLeftCharacter} character={refs.leftCharacter} />)
  states.get.btnLeftCharacter = btnLeftCharacter
  states.set.btnLeftCharacter = setBtnLeftCharacter

  const [rightCharacter, setRightCharacter] = useState(<></>)
  states.get.rightCharacter = rightCharacter
  states.set.rightCharacter = setRightCharacter
  refs.rightCharacter = useRef(null)

  const [btnRightCharacter, setBtnRightCharacter] = useState(<Characters position="right" setCharacter={setRightCharacter} character={refs.rightCharacter} />)
  states.get.btnRightCharacter = btnRightCharacter
  states.set.btnRightCharacter = setBtnRightCharacter

  const [character, setCharacter] = useState(<></>)
  states.get.character = character
  states.set.character = setCharacter
  refs.character = useRef(null)

  const [btnCharacter, setBtnCharacter] = useState(<Characters position="center" setCharacter={setCharacter} character={refs.character} />)
  states.get.btnCharacter = btnCharacter
  states.set.btnCharacter = setBtnCharacter

  const [bubble, setBubble] = useState(<Bubble/>)
  states.get.bubble = bubble
  states.set.bubble = setBubble

  return (
    <>
    <Header title={txt('dialog.title')} />
    <div className="dialog content" ref={refs.window.dialog}>
      {background}
      {btnBackground}
      {leftCharacter}
      {btnLeftCharacter}
      {character}
      {btnCharacter}
      {rightCharacter}
      {btnRightCharacter}
      {bubble}
    </div>
    </>
  )
}


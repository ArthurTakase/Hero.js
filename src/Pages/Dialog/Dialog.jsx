import Header from '../../Components/Header'
import { data, txt, refs, states } from '../../App'
import '../../scss/window_behavior.scss'
import Background from './Background'
import Characters from './Characters'

import { useState } from 'react'

export function resetDialog() {
  states.set.background(<></>)
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

  const [btnLeftCharacter, setBtnLeftCharacter] = useState(<Characters position="left" setCharacter={setLeftCharacter} />)
  states.get.btnLeftCharacter = btnLeftCharacter
  states.set.btnLeftCharacter = setBtnLeftCharacter

  const [rightCharacter, setRightCharacter] = useState(<></>)
  states.get.rightCharacter = rightCharacter
  states.set.rightCharacter = setRightCharacter

  const [btnRightCharacter, setBtnRightCharacter] = useState(<Characters position="right" setCharacter={setRightCharacter} />)
  states.get.btnRightCharacter = btnRightCharacter
  states.set.btnRightCharacter = setBtnRightCharacter

  const [character, setCharacter] = useState(<></>)
  states.get.character = character
  states.set.character = setCharacter

  const [btnCharacter, setBtnCharacter] = useState(<Characters position="center" setCharacter={setCharacter} />)
  states.get.btnCharacter = btnCharacter
  states.set.btnCharacter = setBtnCharacter

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
    </div>
    </>
  )
}


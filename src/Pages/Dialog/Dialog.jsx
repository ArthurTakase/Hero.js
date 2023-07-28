import Header from '../../Components/Header'
import { data, txt, refs, states } from '../../App'
import '../../scss/window_behavior.scss'
import Background from './Background'

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


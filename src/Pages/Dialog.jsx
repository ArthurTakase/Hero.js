import Header from '../Components/Header'
import { data, txt, refs, states } from '../App'
import Select from '../Components/Select'
import '../scss/window_behavior.scss'

import { useState, useEffect } from 'react'

export default function Dialog() {
  const [background, setBackground] = useState(<>
    <button onClick={() => Select(data.data.pictures, 'img')}>+</button>
  </>)
  
  useEffect(() => {
    states.get.background = background
    states.set.background = setBackground
  }, [background, setBackground])

  return (
    <>
    <Header title={txt('dialog.title')} />
    <div className="dialog content" ref={refs.window.dialog}>
      {background}
    </div>
    </>
  )
}


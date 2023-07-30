import { data, txt, states, refs } from '../../App'
import { Checkbox, Input, Select, TextArea } from '../../Components/Input'

import { useRef } from 'react'

export default function Bubble() {
  refs.input.dialog = {}
  refs.input.dialog.bubble = {}
  refs.input.dialog.bubble.title = useRef(null)
  refs.input.dialog.bubble.content = useRef(null)

  return (
    <div className="bubble">
      <div className="bubbleTitle">
        <Input type="text" placeholder={txt('dialog.bubble.title')} r={refs.input.dialog.title} />
      </div>
      <div className="bubbleContent">
        <i className='bx bxs-down-arrow'></i>
        <TextArea placeholder={txt('dialog.bubble.content')} r={refs.input.dialog.content} />
      </div>
    </div>
  )
}

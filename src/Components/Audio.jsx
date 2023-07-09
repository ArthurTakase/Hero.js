import '../scss/image.scss'

import { states } from '../App'
import audio from '../assets/audio.jpg'

export default function Audio({ audioUrl, audioName }) {    
  function setModal() {
    states.set.setModalContent(
      <>
        <audio controls src={audioUrl}></audio>
        <p className="ModalTitle">{audioName}</p>
      </>
    )
    states.set.setOpen(true)
  }

  return (
    <div className="audio pic" onClick={setModal}>
      <p>{audioName}</p>
      <img src={audio} />
    </div>
  )
}
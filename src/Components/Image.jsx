import '../scss/image.scss'
import '../scss/modal.scss'

import { states } from '../App'

export default function Image({ pictureUrl, pictureName }) {    
  function setModal() {
    states.set.setModalContent(
        <>
          <img src={pictureUrl} />
          <p className="ModalTitle">{pictureName}</p>
        </>
      )
    states.set.setOpen(true)
  }

  return (
    <div className="pic" onClick={setModal}>
      <p>{pictureName}</p>
      <img src={pictureUrl} />
    </div>
  )
}
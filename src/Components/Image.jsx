import '../scss/image.scss'
import '../scss/modal.scss'

export default function Image({ pictureUrl, pictureName, states }) {    
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
import '../scss/image.scss'

export default function Image({ pictureUrl, pictureName, states }) {    
    function setModal() {
        states.set.setModalContent(<img src={pictureUrl} />)
        states.set.setOpen(true)
    }

    return (
    <div className="pic" onClick={setModal}>
        <p>{pictureName}</p>
        <img src={pictureUrl} />
    </div>
    )
}
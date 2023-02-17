import '../scss/image.scss'

export default function Audio({ audioUrl, audioName, states }) {    
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
        <img src="assets/audio.jpg" />
    </div>
    )
}
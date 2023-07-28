import FullpageSelect from '../../Components/Select'
import { data, txt, states } from '../../App'

export default function Background() {
  return (
    <button data-tooltip={txt('dialog.setBackground')} className="btnBackground"
      onClick={() => FullpageSelect(data.data.pictures, 'img', true, (element) => {
        if (element === null) states.set.background(<></>)
        else states.set.background(<img className="dialogBackground" src={element[1]} alt={element[0]}></img>)
        states.set.setOpen(false)
        // TODO: Mettre à jour les data du dialog
      })}
    ></button>
  )
}
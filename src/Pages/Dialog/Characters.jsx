import FullpageSelect from '../../Components/Select'
import { data, txt, states } from '../../App'

export default function Characters({ position, setCharacter }) {
  return (
    <div className={`addCharacter ${position}`} data-tooltip={txt('dialog.addCharacter')}>
      <button className="addCharacterBtn"
        onClick={() => FullpageSelect(data.data.pictures, 'img', true, (element) => {
          // TODO: Mettre à jour les data du dialog
          console.log(element)
          if (element === null) setCharacter(<></>)
          else setCharacter(
            <div className={`character ${position}`}>
              <img src={element[1]} alt={element[0]} />
            </div>
          )
          // Ajouter un bouton pour mettre en avant ou non le personnage
          states.set.setOpen(false)
        })}
      >+</button>
    </div>
  )
}

import FullpageSelect from '../../Components/Select'
import { data, txt, states } from '../../App'

export default function Characters() {
  return (
    <div className="addCharacter" data-tooltip={txt('dialog.addCharacter')}>
      <button className="addCharacterBtn"
        onClick={() => FullpageSelect(data.data.pictures, 'img', (element) => {
          // TODO: Mettre à jour les data du dialog
          console.log(element)
          // append le nouveau personnage dans le dialog (à gauche)
        })}
      >+</button>
    </div>
  )
}

// Ouvrir une seconde modale pour choisir la position de l'image et si elle doit être mise en avant ou non -> dans une prochaine maj
import FullpageSelect from '../../Components/Select'
import { data, txt, states } from '../../App'
import { useRef } from 'react'

export default function Characters({ position, setCharacter, character }) {
  const btnRef = useRef(null)

  return (
    <div className={`addCharacter ${position}`}>
      <button className="dialogBtn" data-tooltip={txt('dialog.addCharacter')}
        onClick={() => FullpageSelect(data.data.pictures, 'img', true, (element) => {
          // TODO: Mettre à jour les data du dialog
          setCharacter(element === null ? <></> :
            <div className={`character ${position}`}>
              <img ref={character} src={element[1]} alt={element[0]} />
            </div>
          )
          if (btnRef.current) btnRef.current.classList.toggle('hidden', element === null)
          states.set.setOpen(false)
        })}
      ><i className='bx bxs-folder-plus' ></i></button>
      <div className="subZoneDialogBtn">
        <button className='dialogBtn hidden' data-tooltip={txt('dialog.changeLayout')} ref={btnRef}
          onClick={() => {
            character.current.classList.toggle('disable')
            const isForward = btnRef.current.innerHTML === '<i class="bx bx-hide"></i>'
            btnRef.current.innerHTML = isForward ? "<i class='bx bx-show'></i>" : "<i class='bx bx-hide'></i>"
          }}
        ><i className='bx bx-hide'></i></button>
      </div>
    </div>
  )
}

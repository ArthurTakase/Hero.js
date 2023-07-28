import { states, txt } from '../App'

export default function FullpageSelect(props, type, remove, onClick_callback) {
  const elementLength = Object.entries(props).length
  const elements = Object.entries(props).map((element, index) => {
    return (
      <button onClick={() => onClick_callback(element)} className='select_element' key={index}>
        {type === 'img' ? <img src={element[1]} alt={element[0]} /> : element[0]}
      </button>
    )
  })

  states.set.setModalContent(
    <div className="modalContent">
      <div className="modalTitle">{txt('misc.pleaseSelect')}</div>
      <div className="localGames">
        {elementLength ? 
        <>
          {remove ?
            <button onClick={() => onClick_callback(null)} className='select_element'>
              {txt('misc.remove')}
            </button>
          : <></>}
          {elements}
        </>
        : txt('misc.is_empty')}
      </div>
    </div>
  )
  states.set.setOpen(true)
}
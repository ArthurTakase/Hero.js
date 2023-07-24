import { states, txt } from '../App'

export default function Select(props, type) {
  const elements = Object.entries(props).map((element, index) => {
    return (
      <button className='select_element' value={element[0]} key={index}>
        {type === 'img' ? <img src={element[1]} alt={element[0]} /> : element[0]}
      </button>
    )
  })

  states.set.setModalContent(
    <div className="modalContent">
      <div className="modalTitle">{txt('misc.pleaseSelect')}</div>
      {elements}
    </div>
  )
  states.set.setOpen(true)
}
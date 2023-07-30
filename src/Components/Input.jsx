import '../scss/input.scss'
import '../scss/checkbox.scss'

export function Input({ type, placeholder, label, r, required, value }) {
  return (
    <div className="input">
      <label>{label}<span className="required">{required ? " *" : ""}</span></label>
      <input ref={r} type={type} placeholder={placeholder} defaultValue={value} />
    </div>
  )
}

export function TextArea({ placeholder, label, r, required, value }) {
  return (
    <div className="input">
      <label>{label}<span className="required">{required ? " *" : ""}</span></label>
      <textarea ref={r} placeholder={placeholder} defaultValue={value} />
    </div>
  )
}

export function Checkbox({ label, r, id, onChange }) {
  return (
    <div className='check'>
      <label>{label}</label>
      <div className="toggle-pill-color">
        <input type="checkbox" id={id} ref={r} onChange={onChange}/>
        <label tabIndex={0} htmlFor={id}></label>
      </div>
    </div>
  )
}

export function Select({ label, r, options, onChange }) {
  return (
    <div className="select">
      <label>{label}</label>
      <select ref={r} onChange={onChange}>
        {options}
      </select>
    </div>
  )
}
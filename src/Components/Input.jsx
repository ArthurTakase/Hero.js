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

export function Checkbox({ label, r, id, onChange }) {
    return (
        <div className='check'>
            <label>{label}</label>
            <div className="toggle-pill-color">
                <input type="checkbox" id={id} ref={r} onChange={onChange}/>
                <label htmlFor={id}></label>
            </div>
        </div>
    )
}
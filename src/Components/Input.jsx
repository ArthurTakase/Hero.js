import '../scss/input.scss'

export function Input({ type, placeholder, label, r, required }) {
    return (
        <div className="input">
            <label>{label}<span className="required">{required ? " *" : ""}</span></label>
            <input ref={r} type={type} placeholder={placeholder} />
        </div>
    )
}
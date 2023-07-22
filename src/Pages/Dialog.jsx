import Header from '../Components/Header'
import { data, txt, refs } from '../App'
import '../scss/window_behavior.scss'

export default function Dialog() {
  return (
    <>
    <Header title={txt('dialog.title')} />
    <div className="general content" ref={refs.window.general}>
    </div>
    </>
  )
}


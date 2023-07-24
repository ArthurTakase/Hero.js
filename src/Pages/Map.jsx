import Header from '../Components/Header'
import { data, txt, refs } from '../App'
import '../scss/window_behavior.scss'

export default function Map() {
  return (
    <>
    <Header title={txt('map.title')} />
    <div className="map content" ref={refs.window.map}>
    </div>
    </>
  )
}

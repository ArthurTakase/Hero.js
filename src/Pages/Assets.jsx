import { useState } from 'react'

import '../scss/window_behavior.scss'

import { data, refs, states } from '../App'
import { uploadFile } from '../Tools/UploadFile'
import Image from '../Components/Image'
import Audio from '../Components/Audio'
import Header from '../Components/Header'
import Collapse from '../Components/Collapse'

export function reload_pictures() {
  const pictures = Object.keys(data.data.pictures)

  if (pictures.length === 0) {
    states.set.pictures(<>Empty</>)
    return
  }
  
  const p = pictures.map((picture, index) => {
    return ( <Image pictureUrl={data.data.pictures[picture]} pictureName={picture} key={index} /> )
  })
  states.set.pictures(p)
}

export function reload_sounds() {
  const sounds = Object.keys(data.data.sounds)

  if (sounds.length === 0) {
    states.set.sounds(<>Empty</>)
    return
  }

  const s = sounds.map((sound, index) => {
    return ( <Audio soundUrl={data.data.sounds[sound]} soundName={sound} key={index} /> )
  })
  states.set.sounds(s)
}

export default function Assets() {
  const [pictures, setPictures] = useState(<>Empty</>)
  const [sounds, setSounds] = useState(<>Empty</>)

  states.set.pictures = setPictures
  states.set.sounds = setSounds
  states.get.pictures = pictures
  states.get.sounds = sounds

  function handleChange(event) {
    const files = event.target.files

    Array.from(files).forEach(file => {
      uploadFile(file, function(baseImg) {
        const file64 = baseImg.toString()
        if (file64.includes("data:image")) {
          data.data.pictures[file.name.replace(/\.[^/.]+$/, "")] = baseImg.toString()
          reload_pictures()
        }
        else if (file64.includes("data:audio")) {
          data.data.sounds[file.name.replace(/\.[^/.]+$/, "")] = baseImg.toString()
          reload_sounds()
        }
      })
    });

  }

  return (
    <>
      <Header title="Assets" uploadFunc={handleChange} uploadType="image/*,audio/*" />
      <div className="picture content" ref={refs.window.assets}>
        <Collapse name="Pictures">
          {pictures}
        </Collapse>
        <Collapse name="Sounds">
          {sounds}
        </Collapse>
      </div>
    </>
  )
}
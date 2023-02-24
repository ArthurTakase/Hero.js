import { useState } from 'react'

import '../scss/window_behavior.scss'

import { data, lang } from '../App'
import { uploadFile } from '../Tools/UploadFile'
import Image from '../Components/Image'
import Audio from '../Components/Audio'
import Header from '../Components/Header'
import Collapse from '../Components/Collapse'

export default function Assets({ refs, states }) {
    const txt = lang[localStorage.getItem("lang")]
    const [pictures, setPictures] = useState(<>Nothing</>)
    const [sounds, setSounds] = useState(<>Nothing</>)

    function handleChange(event) {
        const files = event.target.files

        Array.from(files).forEach(file => {
            uploadFile(file, function(baseImg) {
                const file64 = baseImg.toString()
                if (file64.includes("data:image")) {
                    data.data.pictures[file.name.replace(/\.[^/.]+$/, "")] = baseImg.toString()
                    const p = Object.keys(data.data.pictures).map((picture, index) => {
                        return ( <Image pictureUrl={data.data.pictures[picture]} pictureName={picture} key={index} states={states} /> )
                    })
            
                    setPictures(p)
                }
                else if (file64.includes("data:audio")) {
                    data.data.sounds[file.name.replace(/\.[^/.]+$/, "")] = baseImg.toString()
                    const p = Object.keys(data.data.sounds).map((sound, index) => {
                        return ( <Audio audioUrl={data.data.sounds[sound]} audioName={sound} key={index} states={states} /> )
                    })

                    setSounds(p)
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
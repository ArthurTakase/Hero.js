import Window from '../Components/Window'
import { data, lang } from '../App'
import '../scss/window_behavior.scss'
import { uploadPicture } from '../Tools/UploadPicture'
import { useState } from 'react'

export default function Picture({ refs }) {
    const txt = lang[localStorage.getItem("lang")]
    const [pictures, setPictures] = useState(<></>)

    function handleChange(event) {
        const file = event.target.files[0]
        uploadPicture(file, function(baseImg) {
            data.data.pictures[file.name.replace(/\.[^/.]+$/, "")] = baseImg.toString()

            const p = Object.keys(data.data.pictures).map((picture, index) => {
                return (
                    <div className="pic" key={index}>
                        <p>{picture}</p>
                        <img src={data.data.pictures[picture]} />
                    </div>
                )
            })

            setPictures(p)
        })
    }

    return (
        <Window title="Pictures" r={refs.window.picture} refs={refs} uploadFunc={handleChange}>
            <div className="picture">
                {pictures}
            </div>
        </Window>
    )
}
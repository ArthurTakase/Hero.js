import Header from '../Components/Header'
import { data, lang } from '../App'
import '../scss/window_behavior.scss'
import { uploadPicture } from '../Tools/UploadPicture'
import { useState } from 'react'
import Image from '../Components/Image'

export default function Picture({ refs, states }) {
    const txt = lang[localStorage.getItem("lang")]
    const [pictures, setPictures] = useState(<></>)

    function handleChange(event) {
        const files = event.target.files

        Array.from(files).forEach(file => {
            uploadPicture(file, function(baseImg) {
                data.data.pictures[file.name.replace(/\.[^/.]+$/, "")] = baseImg.toString()
                
                const p = Object.keys(data.data.pictures).map((picture, index) => {
                    return ( <Image pictureUrl={data.data.pictures[picture]} pictureName={picture} key={index} states={states} /> )
                })
        
                setPictures(p)
            })
        });

    }

    return (
        <>
            <Header title="Pictures" r={refs.window.picture} uploadFunc={handleChange} />
            <div className="picture content" ref={refs.window.picture}>
                {pictures}
            </div>
        </>
    )
}
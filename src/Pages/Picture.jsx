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
            console.log(file.name.replace(/\.[^/.]+$/, ""))
            console.log(baseImg.toString())
            data.data.pictures[file.name.replace(/\.[^/.]+$/, "")] = baseImg.toString()

            setPictures(<>
                {pictures}
                <div className="picture">
                    <img src={baseImg} />
                </div>
            </>)

            // console.log(data.data.pictures)
            // const p = Object.keys(data.data.pictures).map((picture, index) => {
            //     console.log(picture, index)
            //     return (
            //         <div className="picture" key={index}>
            //             <img src={picture} />
            //         </div>
            //     )
            // })

            // const p = data.data.pictures.map((picture, index) => {
            //     console.log(picture, index)
            //     return (
            //         <div className="picture" key={picture}>
            //             <img src={index} />
            //         </div>
            //     )
            // })

            // setPictures(p)
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
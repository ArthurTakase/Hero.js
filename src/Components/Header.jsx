import React from 'react'
import '../scss/window.scss'
import { notif } from '../App'

export default function Header({ title, saveFunc, uploadFunc, uploadType }) {
    return (
        <>
        <div className="header">
            <div className="title">{title}</div>
            <div className="buttons">
                {saveFunc ? <button className="button" onClick={() => { notif(saveFunc) }} ><i className='bx bx-save'></i></button> : <></>}
                {uploadFunc ? <>
                    <label className="button" htmlFor="uploadForm" title="Upload your file"><i className='bx bx-image-add'></i></label>
                    <input style={{display: "none"}} type="file" id="uploadForm" accept={uploadType} onChange={uploadFunc} multiple />
                </> : <></>}
            </div>
        </div>
        </>
    )
}
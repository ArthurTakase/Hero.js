import React from 'react'
import '../scss/window.scss'
import { notif, txt } from '../App'

export default function Header({ title, saveFunc, uploadFunc, uploadType }) {
  return (
    <>
      <div className="header">
        <div className="title">{title}</div>
        <div className="buttons">
          {saveFunc ? <button className="button hidden" fuction="save" onClick={() => { notif(saveFunc) }} ><i className='bx bx-save'></i></button> : <></>}
          {uploadFunc ? <>
            <label className="button" htmlFor="uploadForm" title={txt('misc.upload_file')}><i className='bx bx-image-add'></i></label>
            <input style={{display: "none"}} type="file" id="uploadForm" accept={uploadType} onChange={uploadFunc} multiple />
          </> : <></>}
        </div>
      </div>
    </>
  )
}
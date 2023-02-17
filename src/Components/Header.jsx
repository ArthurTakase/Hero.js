import React from 'react'
import '../scss/window.scss'
import { toast } from 'react-toastify'

export default function Header({ title, saveFunc, uploadFunc, uploadType }) {
    // function close() {
    //     // remove the window
    //     if (confirm("Are you sure you want to close this window?") == false) { return }
    //     const window = r.current.parentNode
    //     window.parentNode.removeChild(window)
    // }

    function save(func) {
        const ret = func()
        if (ret.value == "success") {
            toast.success(ret.msg, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        } else {
            toast.error(ret.msg, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    }

    return (
        <>
        <div className="header">
            <div className="title">{title}</div>
            <div className="buttons">
                {saveFunc ? <button className="button" onClick={() => { save(saveFunc) }} ><i className='bx bx-save'></i></button> : <></>}
                {uploadFunc ? <>
                    <label className="button" htmlFor="uploadForm" title="Upload your file"><i className='bx bx-cloud-upload'></i></label>
                    <input style={{display: "none"}} type="file" id="uploadForm" accept={uploadType} onChange={uploadFunc} multiple />
                </> : <></>}
                {/* <button className="button" onClick={() => { close() }} ><i className='bx bx-x'></i></button> */}
            </div>
        </div>
        </>
    )
}
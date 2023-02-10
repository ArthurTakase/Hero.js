import React from 'react';
import Draggable from 'react-draggable';
import '../scss/window.scss'
import { toast } from 'react-toastify';

export default function Window({ children, title, r, refs, saveFunc }) {
    function close() {
        r.current.style.display = "none"
    }

    function forward() {
        for (const ref in refs.window) { refs.window[ref].current.style.zIndex = 0 }
        r.current.style.zIndex = 1
    }

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
            });
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
            });
        }
    }

    return (
        <div ref={r} className="drag" onClick={() => { forward() }}>
            <Draggable>
                <div className="window">
                    <div className="header">
                        <div className="title">{title}</div>
                        <div className="buttons">
                            {saveFunc ? <button className="button" onClick={() => { save(saveFunc) }} ><i className='bx bx-save'></i></button> : <></>}
                            <button className="button" onClick={() => { close() }} ><i className='bx bx-x'></i></button>
                        </div>
                    </div>
                    <div className="content">
                        {children}
                    </div>
                </div>
            </Draggable>
        </div>
    )
}
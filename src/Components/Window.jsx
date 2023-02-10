import React from 'react';
import Draggable from 'react-draggable';
import '../scss/window.scss'

export default function Window({ children, title, r }) {
    function close() {
        r.current.style.display = "none"
    }

    function forward() {
        var layer = r.current.style.zIndex
        if (layer === "") layer = 1
        if (layer === "20") return

        r.current.style.zIndex = parseInt(layer) + 1
    }

    function backward() {
        var layer = r.current.style.zIndex
        if (layer === "") layer = 1
        if (layer === "0") return;

        r.current.style.zIndex = parseInt(layer) - 1
    }

    return (
        <div ref={r} className="drag">
            <Draggable>
                <div className="window">
                    <div className="header">
                        <div className="title">{title}</div>
                        <div className="buttons">
                            <button className="button" onClick={() => { forward() }} ><i className='bx bx-layer-plus'></i></button>
                            <button className="button" onClick={() => { backward() }} ><i className='bx bx-layer-minus'></i></button>
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
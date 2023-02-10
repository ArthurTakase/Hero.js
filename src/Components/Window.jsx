import React from 'react';
import Draggable from 'react-draggable';
import '../scss/window.scss'

export default function Window({ children, title, r, refs }) {
    function close() {
        r.current.style.display = "none"
    }

    function forward() {
        for (const ref in refs) { refs[ref].current.style.zIndex = 0 }
        r.current.style.zIndex = 1
    }

    return (
        <div ref={r} className="drag" onClick={() => { forward() }}>
            <Draggable>
                <div className="window">
                    <div className="header">
                        <div className="title">{title}</div>
                        <div className="buttons">
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
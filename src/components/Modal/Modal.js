import React from 'react'
import './Modal.scss'

const Modal = ({children, isOpen, toggle}) => {
    return (
        <div className={`modal ${!isOpen ? 'closed' : ''}`}>
            <button onClick={()=> toggle()}>x</button>
            {children}
        </div>
    )
}

export default Modal;
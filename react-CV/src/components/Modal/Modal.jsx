import React from "react";
import './Modal.css';

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <p className="modal__text">Связаться со мной можно по электронной почте:</p>
                <h2>borisvip169@gmail.com</h2>
            </div>
        </div>
    )
}

export default Modal;
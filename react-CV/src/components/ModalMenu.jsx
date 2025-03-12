import React from "react";
import './Modal/Modal.css'

const toBlock = (height) => {
    window.scrollTo({top: height, left: 0, behavior: 'smooth'})
  }

const ModalMenu = ({active, setActive}) => {
    const closeModal = (e) => {
        const height = e.target.getAttribute('height')
        toBlock(height)
        setActive(false)
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
              <a className="modal__text-mobile" onClick={closeModal} height = '10'>Обо мне</a>
              <a className="modal__text-mobile" onClick={closeModal} height = '1200'>Мой стек</a>
              <a className="modal__text-mobile" onClick={closeModal} height = '1900'>Проекты</a>
              <a className="modal__text-mobile" onClick={closeModal} height = '4000'>Контакты</a>
            </div>
        </div>
    )
}

export default ModalMenu;
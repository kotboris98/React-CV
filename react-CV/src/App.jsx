import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ModalWindow from './components/Header/ModalWindow'

function App() {
  const [showModal, setShowModal] = useState(false);
  
  const handleOpenModal = () => {
    setShowModal(true)
  };

  const handleCloseModal = () => {
    setShowModal(false)
  };

  return (
    <header>
    <div className="menu">
        <a>Обо мне</a>
        <a>Мой стек</a>
        <a>Проекты</a>
        <a>Контакты</a>
    </div>

    <button onClick={handleOpenModal} className="btn">Связаться</button>
    <ModalWindow show={showModal} onClose={handleCloseModal}>
        <p>Связаться</p>
    </ModalWindow>

    <div className="icons">
        <a href="https://t.me/kotboris98">
            <img src='../src/assets/telegram.png' className="icon"></img>
        </a> 
        <a href="https://instagram.com/kotboris98" className="icon">
            <img src='../src/assets/instagram.png' className="icon"></img>
        </a>
        <a href="https://vk.com/kotboris_98" className="icon">
            <img src='../src/assets/vk.png' className="icon"></img>
        </a> 
    </div>
</header>
)
}

export default App

import { useState } from 'react'
import './App.css'
import '../src/components/Header/ModalWindow.css'

function App() {
  const [modal, setModal] = useState(false);

  return (
    <header>
    <div className="menu">
        <a>Обо мне</a>
        <a>Мой стек</a>
        <a>Проекты</a>
        <a>Контакты</a>
    </div>

    <button onClick={() => setModal(!modal)} className="btn">Связаться</button>

    {!modal ? '' : (
    <div className='modal'>
        <div onClick={() => setModal(!modal)} className='close'>
            <button>Закрыть</button>
        </div>
        <div className='content'>My modal</div>
    </div>
    )}

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

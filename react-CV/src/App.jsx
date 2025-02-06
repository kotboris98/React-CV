import { useState } from 'react'
import './App.css'
import './components/Modal/Modal'
import Modal from './components/Modal/Modal.jsx';
import './components/Modal/Modal.css';

const App = () => {
  const [modalActive, setModalActive] = useState(true);

  return (
    <><header>
          <div className="menu">
              <a>Обо мне</a>
              <a>Мой стек</a>
              <a>Проекты</a>
              <a>Контакты</a>
          </div>

          <button className="btn">Связаться</button>

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
      </header><Modal active={modalActive} setActive={setModalActive} /></>
)
}

export default App

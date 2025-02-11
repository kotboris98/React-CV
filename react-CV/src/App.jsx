import { useState } from 'react'
import './App.css'
import './components/Modal/Modal'
import Modal from './components/Modal/Modal.jsx';
import './components/Modal/Modal.css';
import './components/Bio.css';
import './components/Stack.css';
import './components/Header.css';

const App = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <><header>
          <div className="menu">
              <a>Обо мне</a>
              <a>Мой стек</a>
              <a>Проекты</a>
              <a>Контакты</a>
          </div>
          <div className='header__center'></div>
          <div className='header__right'>
            <button className="btn" onClick={() => setModalActive(true)}>Связаться</button>
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
          </div>
      </header>
      <Modal active={modalActive} setActive={setModalActive} />
      <main>
        <div className='bio'>
            <div className='bio__text'>
                <div className='bio__first__heading'>
                    <img src='../src/assets/programmer.svg' className='bio__icon'></img>
                    <h2 className='bio__heading'>Обо мне</h2>
                </div>
                <ul>
                    <li className='bio__li'>Начинающий Frontend-разработчик</li>
                    <li className='bio__li'>Придерживаюсь чистого и аккуратного кода</li>
                    <li className='bio__li'>Стремлюсь к саморазвитию, получению нового опыта и работе над настоящими проектами</li>
                </ul>
                <div className='bio__first__heading'>
                    <img src='../src/assets/internship.svg' className='bio__icon'></img>
                    <h2 className='bio__heading'>Чем я занимался на стажировке</h2>
                </div>
                <ul>
                    <li className='bio__li'>Верстка лендингов (сайтов) на HTML и CSS</li>
                    <li className='bio__li'>Разработка браузерной игры на JavaScript</li>
                    <li className='bio__li'>Разработка мобильного приложения на Angular</li>
                    <li className='bio__li'>Разработка онлайн-магазина на Angular</li>
                </ul>
            </div>
            <div className='photo'>
                <img src='../src/assets/photo_of_me.jpg' className='photo__of__me'></img>
            </div>   
        </div>
        <div className='bio__first__heading'>
            <img src='../src/assets/tools.svg' className='bio__icon'></img>
            <h2 className='bio__heading'>Мой стек</h2>
        </div>
        <div className='stack'>
            <div className='stack__icons'>
                <img src='../src/assets/html.svg' className='stack__icon'></img>
                <img src='../src/assets/css.svg' className='stack__icon'></img>
                <img src='../src/assets/js.svg' className='stack__icon'></img>
                <img src='../src/assets/ts.svg' className='stack__icon'></img>
                <img src='../src/assets/react.svg' className='stack__icon'></img>
                <img src='../src/assets/git.svg' className='stack__icon'></img>
            </div>
        </div>
        <div className='bio__first__heading'>
            <img src='../src/assets/documents.svg' className='bio__icon'></img>
            <h2 className='bio__heading'>Мои проекты</h2>
        </div>
      </main>
      </>
)
}

export default App

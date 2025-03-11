import { useEffect, useState } from 'react'
import './App.css'
import './components/Modal/Modal'
import Modal from './components/Modal/Modal.jsx';
import './components/Modal/Modal.css';
import './components/Bio.css';
import './components/Stack.css';
import './components/Header.css';
import './components/Projects.css';
import ModalMenu from './components/ModalMenu.jsx';

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalMenuActive, setModalMenuActive] = useState(false);

  const [scroll, setScroll] = useState(0);

  const [isPortrait, setIsPortrait] = useState(window.innerWidth > window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
        setIsPortrait(window.innerWidth > window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
        window.removeEventListener('resize', handleResize)
    }
  }, [])

  const scrollUp = () => {
    setScroll(window.scrollY)
  }

  const upButton = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollUp)
  }, [])

  const toBlock = (height) => {
    window.scrollTo({top: height, left: 0, behavior: 'smooth'})
  }

  return (
    <><><header>
        {isPortrait ? (
        <div className='navigation'>
            <div className="menu">
              <a onClick={upButton}>Обо мне</a>
              <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height = '620'>Мой стек</a>
              <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height = '1000'>Проекты</a>
              <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height = '3000'>Контакты</a>
            </div>
            <div className='contacts'>
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
          </div>)

          : ( 
            <div className='navigation'>
            <div className="menu">
                <a onClick={() => setModalMenuActive(true)} className="icon-mobile">
                      <img src='../src/assets/burger-menu.svg' className="icon-mobile"></img>
                </a>
            </div>
            <div className='contacts-mobile'>
              <button className="btn-mobile" onClick={() => setModalActive(true)}>Связаться</button>
              <div className="icons">
                  <a href="https://t.me/kotboris98">
                      <img src='../src/assets/telegram.png' className="icon-mobile"></img>
                  </a>
                  <a href="https://instagram.com/kotboris98" className="icon-mobile">
                      <img src='../src/assets/instagram.png' className="icon-mobile"></img>
                  </a>
                  <a href="https://vk.com/kotboris_98" className="icon-mobile">
                      <img src='../src/assets/vk.png' className="icon-mobile"></img>
                  </a>
              </div>
            </div>
          </div>
          )}
      </header>


          <Modal active={modalActive} setActive={setModalActive} />
          <ModalMenu active={modalMenuActive} setActive={setModalMenuActive} />


          <main> {isPortrait ? (
              <><div className='bio'>
                  <div className='bio__text'>
                      <div className='bio__article'>
                          <img src='../src/assets/programmer.svg' className='bio__icon'></img>
                          <h2 className='bio__heading'>Обо мне</h2>
                      </div>
                      <ul>
                          <li className='bio__li'>Начинающий Frontend-разработчик</li>
                          <li className='bio__li'>Придерживаюсь чистого и аккуратного кода</li>
                          <li className='bio__li'>Стремлюсь к саморазвитию, получению нового опыта и работе над настоящими проектами</li>
                      </ul>
                      <div className='bio__article'>
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
              </div><div className='stack__and__projects'>
                      <div className='bio__article'>
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
                      <div className='bio__article'>
                          <img src='../src/assets/documents.svg' className='bio__icon'></img>
                          <h2 className='bio__heading'>Мои проекты</h2>
                      </div>
                      <div className='projects'>
                          <div className='project__block'>
                              <img src='../src/assets/S1.png' className='projects__screenshot'></img>
                              <div className='project__description'>
                                  <div>
                                      <div><h2 className='project__text'>Название:</h2><h1>Лендинг веб-страницы проекта Learn Up</h1></div>
                                      <div><h2 className='project__text'>Технологии:</h2><h1>HTML, CSS</h1></div>
                                  </div>
                              </div>
                          </div>
                          <div className='project__block'>
                              <img src='../src/assets/S2.png' className='projects__screenshot'></img>
                              <div className='project__description'>
                                  <div>
                                      <div><h2 className='project__text'>Название:</h2><h1>Калькулятор</h1></div>
                                      <div><h2 className='project__text'>Технологии:</h2><h1>JavaScript</h1></div>
                                  </div>
                              </div>
                          </div>
                          <div className='project__block'>
                              <img src='../src/assets/S3.png' className='projects__screenshot'></img>
                              <div className='project__description'>
                                  <div>
                                      <div><h2 className='project__text'>Название:</h2><h1>Блокнот заметок</h1></div>
                                      <div><h2 className='project__text'>Технологии:</h2><h1>Typescript, React</h1></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='bio__article'>
                          <img src='../src/assets/Phone.svg' className='bio__icon'></img>
                          <h2 className='bio__heading'>Контакты</h2>
                      </div>
                      <ul>
                          <li className='bio__li'>Электронная почта: <h2>borisvip169@gmail.com</h2></li>
                          <li className='bio__li'>Гитхаб: <h2><a href='https://github.com/kotboris98'>https://github.com/kotboris98</a></h2></li>
                      </ul>
                  </div></>) : 
                  
                  (
                <><div className='bio'>
                      <div className='bio__text-mobile'>
                          <div className='bio__article-mobile'>
                              <img src='../src/assets/programmer.svg' className='bio__icon'></img>
                              <h2 className='bio__heading-mobile'>Обо мне</h2>
                          </div>
                          <img src='../src/assets/photo_of_me.jpg' className='photo__of__me-mobile'></img>
                          <ul className='ul-mobile'>
                              <li className='bio__li-mobile'>Начинающий Frontend-разработчик</li>
                              <li className='bio__li-mobile'>Придерживаюсь чистого и аккуратного кода</li>
                              <li className='bio__li-mobile'>Стремлюсь к саморазвитию, получению нового опыта и работе над настоящими проектами</li>
                          </ul>
                          <div className='bio__article-mobile'>
                              <img src='../src/assets/internship.svg' className='bio__icon'></img>
                              <h2 className='bio__heading-mobile'>Чем я занимался на стажировке</h2>
                          </div>
                          <ul className='ul-mobile'>
                              <li className='bio__li-mobile'>Верстка лендингов (сайтов) на HTML и CSS</li>
                              <li className='bio__li-mobile'>Разработка браузерной игры на JavaScript</li>
                              <li className='bio__li-mobile'>Разработка мобильного приложения на Angular</li>
                              <li className='bio__li-mobile'>Разработка онлайн-магазина на Angular</li>
                          </ul>
                      </div>
                  </div><div className='stack__and__projects-mobile'>
                          <div className='bio__article-mobile'>
                              <img src='../src/assets/tools.svg' className='bio__icon'></img>
                              <h2 className='bio__heading-mobile'>Мой стек</h2>
                          </div>
                          <div className='stack-mobile'>
                              <div className='stack__icons-mobile'>
                                  <img src='../src/assets/html.svg' className='stack__icon'></img>
                                  <img src='../src/assets/css.svg' className='stack__icon'></img>
                                  <img src='../src/assets/js.svg' className='stack__icon'></img>
                                  <img src='../src/assets/ts.svg' className='stack__icon'></img>
                                  <img src='../src/assets/react.svg' className='stack__icon'></img>
                                  <img src='../src/assets/git.svg' className='stack__icon'></img>
                              </div>
                          </div>
                          <div className='bio__article-mobile'>
                              <img src='../src/assets/documents.svg' className='bio__icon'></img>
                              <h2 className='bio__heading'>Мои проекты</h2>
                          </div>
                          <div className='projects'>
                              <div className='project__block'>
                                  <img src='../src/assets/S1.png' className='projects__screenshot'></img>
                                  <div className='project__description'>
                                      <div>
                                          <div><h2 className='project__text'>Название:</h2><h1>Лендинг веб-страницы проекта Learn Up</h1></div>
                                          <div><h2 className='project__text'>Технологии:</h2><h1>HTML, CSS</h1></div>
                                      </div>
                                  </div>
                              </div>
                              <div className='project__block'>
                                  <img src='../src/assets/S2.png' className='projects__screenshot'></img>
                                  <div className='project__description'>
                                      <div>
                                          <div><h2 className='project__text'>Название:</h2><h1>Калькулятор</h1></div>
                                          <div><h2 className='project__text'>Технологии:</h2><h1>JavaScript</h1></div>
                                      </div>
                                  </div>
                              </div>
                              <div className='project__block'>
                                  <img src='../src/assets/S3.png' className='projects__screenshot'></img>
                                  <div className='project__description'>
                                      <div>
                                          <div><h2 className='project__text'>Название:</h2><h1>Блокнот заметок</h1></div>
                                          <div><h2 className='project__text'>Технологии:</h2><h1>Typescript, React</h1></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className='bio__article-mobile'>
                              <img src='../src/assets/Phone.svg' className='bio__icon'></img>
                              <h2 className='bio__heading'>Контакты</h2>
                          </div>
                          <ul>
                              <li className='bio__li'>Электронная почта: <h2>borisvip169@gmail.com</h2></li>
                              <li className='bio__li'>Гитхаб: <h2><a href='https://github.com/kotboris98'>https://github.com/kotboris98</a></h2></li>
                          </ul>
                      </div></>)}
          </main>


      </><footer>
              <p>Developed and designed by <span>Boris Tyukov</span></p>
              <p>2025</p>
          </footer></>
)
}

export default App

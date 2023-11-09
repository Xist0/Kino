import '../App.css'
import '../media.css'
import logo from '../img/logo.png'
import poisk from '../img/poisk.png'
import React from 'react'
import { Link} from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className="container_nav">
        <div className="header_logo">
          <img src={logo} alt="Logo" />
          <h1>Kino</h1>
          <h2>area</h2>
        </div>
        <div className="nav_a" id="nav_a">
          <div className="nav_a_txt">
            <a href="#">Афиша</a>
          </div>
          <div className="nav_a_txt">
            <a href="#">Медиа</a>
          </div>
          <div className="nav_a_txt">
            <a href="#">Фильмы</a>
          </div>
          <div className="nav_a_txt">
            <a href="#">Актёры</a>
          </div>
          <div className="nav_a_txt">
            <a href="#">Новости</a>
          </div>
          <div className="nav_a_txt">
            <a href="#">Подборки</a>
          </div>
          <div className="nav_a_txt">
            <a href="#">Категории</a>
          </div>
        </div>
        <div className="nav_but">
          <div className="nav_poisk">
            <a href="#">
              <img src={poisk} alt="" />
            </a>
          </div>
          <div className="nav_button">
            <Link to='/login'><button>Войти</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;

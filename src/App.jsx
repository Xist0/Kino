<<<<<<< HEAD
import "./App.css";
import "./media.css";
<script src="./App.jsx"></script>
import Nav from "./Component/Nav.jsx";
import Kino from "./Component/Kino";
import Grid from "./Component/Grid";
import Grid_btn from "./Component/Grid_btn";
import Trailer from "./Component/Trailer";
import Expected_news_items from "./Component/Expected_news_items";
import Expected_news_content from "./Component/Expected_news_content";
import Box_office_receipts from "./Component/Box_office_receipts";
import Footer_sms_email_container from "./Component/Footer_sms_email_container";
import Footer_ashifa from "./Component/Footer_ashifa";
=======
import { useState } from 'react'
import './App.css'
import './media.css'
import logo from './img/logo.png'
import poisk from './img/poisk.png'
import img from './img/image 1.png'
import arrow from './img/Arrow 1.png'
import forsacre from './img/forsach9.png'
import play from './img/Polygon 2.png'
import likeAP from './img/likeAP.png'
import likeDW from './img/likeDW.png'
import Mylan from './img/Mylan.png'
import arrow_left from './img/arrow_left.png'
import arrow_right from './img/arrow_right.png'
import persone_card from './img/person_card.png'
import last_news_active from './img/last_news.png'
import sms from './img/sms.png'
import views from './img/views.png'
import kassa_1 from './img/kassa_1.png'
import vk from './img/vk.png'
import inst from './img/inst.png'
import facebook from './img/facebook.png'
import twitter from './img/twitter.png'
import youtube from './img/youtube.png'
import image_26 from './img/image_26.png'
>>>>>>> 8192da7ba470307b69d2dff1c1ef5b47a3c68049

function App() {
  return (
    <>
      <main>
        <header>
<<<<<<< HEAD
          <Nav />
          <Kino />
          <Grid />
          <Grid_btn />
=======
          <div className="container_nav">
            <div className="header_logo">
              <img src={logo} alt="Logo" />
              <h1>Kino</h1><h2>area</h2>
            </div>
            <div className="nav_a" id='nav_a'>
              <div className="nav_a_txt"><a href="#">Афиша</a></div>
              <div className="nav_a_txt"><a href="#">Медиа</a></div>
              <div className="nav_a_txt"><a href="#">Фильмы</a></div>
              <div className="nav_a_txt"><a href="#">Актёры</a></div>
              <div className="nav_a_txt"><a href="#">Новости</a></div>
              <div className="nav_a_txt"><a href="#">Подборки</a></div>
              <div className="nav_a_txt"><a href="#">Категории</a></div>
            </div>
            <div className="nav_but">
              <div className="nav_poisk">
                <a href="#"><img src={poisk} alt="" /></a>
              </div>
              <div className="nav_button">
                <button href='#'>Войти</button>
              </div>
            </div>
          </div>
          <div className="container_kino">

            <div className="container_kino_nav_title">
              <h1>Сейчас в кино</h1>
            </div>
            <div className="container_kino_nav_line"></div>
            <div className="container_kino_nav_grid">
              <div className="container_kino_nav_grid_txt"><a href="#">Все </a></div>
              <div className="container_kino_nav_grid_txt"><a href="#">Боевики </a></div>
              <div className="container_kino_nav_grid_txt"><a href="#">Приключения </a></div>
              <div className="container_kino_nav_grid_txt"><a href="#">Комедии </a></div>
              <div className="container_kino_nav_grid_txt"><a href="#">Фантастика </a></div>
              <div className="container_kino_nav_grid_txt"><a href="#">Триллеры </a></div>
              <div className="container_kino_nav_grid_txt"><a href="#">Драма</a></div>
            </div>
          </div>
          <div className="container_grid">
            <div className="grid_option">
              <div className="grid_img">
                <img src={img} alt="" />
              </div>
              <div className="grid_rating">
                <h1>6.70</h1>
              </div>
              <div className="grid_title">
                <h1>Побег из Претории</h1>
              </div>
              <div className="grid_hanr">
                <p>Триллер</p>
              </div>
            </div>
            <div className="grid_option">
              <div className="grid_img">
                <img src={img} alt="" />
              </div>
              <div className="grid_rating">
                <h1>6.70</h1>
              </div>
              <div className="grid_title">
                <h1>Побег из Претории</h1>
              </div>
              <div className="grid_hanr">
                <p>Триллер</p>
              </div>
            </div>
            <div className="grid_option">
              <div className="grid_img">
                <img src={img} alt="" />
              </div>
              <div className="grid_rating">
                <h1>6.70</h1>
              </div>
              <div className="grid_title">
                <h1>Побег из Претории</h1>
              </div>
              <div className="grid_hanr">
                <p>Триллер</p>
              </div>
            </div>
            <div className="grid_option">
              <div className="grid_img">
                <img src={img} alt="" />
              </div>
              <div className="grid_rating">
                <h1>6.70</h1>
              </div>
              <div className="grid_title">
                <h1>Побег из Претории</h1>
              </div>
              <div className="grid_hanr">
                <p>Триллер</p>
              </div>
            </div>
            <div className="grid_option">
              <div className="grid_img">
                <img src={img} alt="" />
              </div>
              <div className="grid_rating">
                <h1>6.70</h1>
              </div>
              <div className="grid_title">
                <h1>Побег из Претории</h1>
              </div>
              <div className="grid_hanr">
                <p>Триллер</p>
              </div>
            </div>
          </div>
          <div className="container_grid_btn">
            <button><a href="#">Все новинки</a></button>
          </div>
>>>>>>> 8192da7ba470307b69d2dff1c1ef5b47a3c68049
        </header>
        <Trailer />
      </main>
      <footer>
        <div className="container_footer">
<<<<<<< HEAD
          <Expected_news_items />
          <Expected_news_content />
          <Box_office_receipts />
          <Footer_sms_email_container />
          <Footer_ashifa />
=======
          <div className="expected_news_items">
            <div className="expected_news_items_title">
              <h1>Ожидаемые новинки</h1>
            </div>
            <div className="expected_news_item_nav" id='news_item_1' >
              <img src={arrow_left} alt="" />
              <h1>2/5</h1>
              <img src={arrow_right} alt="" />
            </div>
          </div>
          <div className="expected_news_content">
            <div className="expected_grid_option">
              <div className="expected_grid_img">
                <img src={img} alt="" />
              </div>
              <div className="expected_grid_title">
                <h1>Прощай</h1>
              </div>
              <div className="expected_grid_hanr">
                <p>14 мая 2023 в России</p>
              </div>
            </div>
            <div className="expected_grid_option">
              <div className="expected_grid_img">
                <img src={img} alt="" />
              </div>
              <div className="expected_grid_title">
                <h1>Дружить по-русски!</h1>
              </div>
              <div className="expected_grid_hanr">
                <p>21 мая 2023 в России</p>
              </div>
            </div>
            <div className="expected_grid_option">
              <div className="expected_grid_img">
                <img src={img} alt="" />
              </div>
              <div className="expected_grid_title">
                <h1>Приди ко мне</h1>
              </div>
              <div className="expected_grid_hanr">
                <p>21 мая 2023 в России</p>
              </div>
            </div>
            <div className="expected_grid_option">
              <div className="expected_grid_img">
                <img src={img} alt="" />
              </div>
              <div className="expected_grid_title">
                <h1>Побег из Претории</h1>
              </div>
              <div className="expected_grid_hanr">
                <p>Триллер</p>
              </div>
            </div>
            <div className="expected_news_item_nav" id='news_item_2'>
              <img src={arrow_left} alt="" />
              <h1>2/5</h1>
              <img src={arrow_right} alt="" />
            </div>
          </div>
          <div className="box_office_receipts">
            <div className="box_office_receipts_nav">
              <div className="box_office_receipts_nav_title">
                <h1>Кассовые сборы</h1>
              </div>
              <div className="box_office_receipts_nav_date">
                <h1>13 марта — 15 марта</h1>

                <div className="box_office_receipts_nav_line"></div>
                <div className="box_office_receipts_nav_countries">
                  <h1>Россия </h1>
                  <h1>Весь мир </h1>
                  <h1>США и Канада </h1>
                </div>
              </div>
            </div>
            <div className="box_office_receipts_grid">
              <div className="box_office_receipts_grid_card">
                <img src={kassa_1} alt="" />
                <div className="box_office_receipts_grid_card_content">
                  <h1>1.Бладшот</h1>
                  <h2>$13 млн</h2>
                  <p>$15.1 млн за 4 недели</p>
                </div>
              </div>
              <div className="box_office_receipts_grid_card">
                <img src={kassa_1} alt="" />
                <div className="box_office_receipts_grid_card_content">
                  <h1>1.Бладшот</h1>
                  <h2>$13 млн</h2>
                  <p>$15.1 млн за 4 недели</p>
                </div>
              </div>
              <div className="box_office_receipts_grid_card">
                <img src={kassa_1} alt="" />
                <div className="box_office_receipts_grid_card_content">
                  <h1>1.Бладшот</h1>
                  <h2>$13 млн</h2>
                  <p>$15.1 млн за 4 недели</p>
                </div>
              </div>
              <div className="box_office_receipts_grid_card">
                <img src={kassa_1} alt="" />
                <div className="box_office_receipts_grid_card_content">
                  <h1>1.Бладшот</h1>
                  <h2>$13 млн</h2>
                  <p>$15.1 млн за 4 недели</p>
                </div>
              </div>
              <div className="box_office_receipts_grid_card">
                <img src={kassa_1} alt="" />
                <div className="box_office_receipts_grid_card_content">
                  <h1>1.Бладшот</h1>
                  <h2>$13 млн</h2>
                  <p>$15.1 млн за 4 недели</p>
                </div>

              </div>
            </div>
          </div>
          <div className="footer_sms_email_container">
            <div className="footer_sms_email_title_name">
              <img src={logo} alt="" />
              <h1>Kinoarea</h1>
            </div>
            <div className="footer_sms_email_title">
              <h1>Подпишитесь на E-mail рассылку</h1>
            </div>
            <div className="footer_sms_email_opisanie">
              <p>Если хотиет быть в курсе последних новостей и новинок кино - заполните форму ниже и оформите бесплатную E-mail рассылку! </p>
            </div>
            <div className="footer_sms_email_input">
              <input type="text" placeholder="Введите свой E-mail адрес"></input>
              <button>Подписаться</button>
            </div>
            <div className="footer_sms_email_chekbox">
              <input type="checkbox" name="" id="checkbox" />
              <h1>Соглашаюсь на условия политики конфиденциальности</h1>
            </div>

          </div>
          <div className="footer_ashifa">
            <div className="footer_soc_seti_container">
              <a href="#"><img src={vk} alt="" /></a>
              <a href="#"><img src={inst} alt="" /></a>
              <a href="#"><img src={facebook} alt="" /></a>
              <a href="#"><img src={twitter} alt="" /></a>
              <a href="#"><img src={youtube} alt="" /></a>
            </div>
            <div className="footer_ashifa_nav">
              <div className="nav_a">
                <div className="nav_a_txt"><a href="#">Афиша</a></div>
                <div className="nav_a_txt"><a href="#">Медиа</a></div>
                <div className="nav_a_txt"><a href="#">Фильмы</a></div>
                <div className="nav_a_txt"><a href="#">Актёры</a></div>
                <div className="nav_a_txt"><a href="#">Новости</a></div>
                <div className="nav_a_txt"><a href="#">Подборки</a></div>
                <div className="nav_a_txt"><a href="#">Категории</a></div>
              </div>
            </div>
            <div className="footer_ashifa_prava">
              <h1>2023 © Kinoarea.  Все права защищены</h1>
            </div>
            <div className="footer_ashifa_politika">
              <a href="#">Политика конфиденциальности</a>
            </div>
          </div>
>>>>>>> 8192da7ba470307b69d2dff1c1ef5b47a3c68049
        </div>
      </footer>
    </>
  );
}

export default App;

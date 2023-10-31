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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
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
        </header>
        <div className="container_trailer">
          <div className="container_trailer_nav">
            <h1>Новые трейлеры</h1>
            <h2>Все трейлеры <img src={arrow} alt="" /><a href="#"></a></h2>
          </div>
          <div className="container_trailer_video">
            <img src={forsacre} alt="" />
            <div className="container_trailer_vide_play">
              <img src={play} alt="" />
            </div>
            <div className="container_trailer_video_opisanie">
              <h1>Форсаж 9</h1>
              <div className="container_trailer_video_likes_container">
                <div className="container_trailer_video_likes">
                  <img src={likeAP} alt="" />
                </div>
                <div className="container_trailer_video_likes">
                  <img src={likeDW} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="container_trailer_video_scroll">
            <div className="container_trailer_video_scroll_content">
              <img src={Mylan} alt=""></img>
              <h1>Мулан </h1></div>
            <div className="container_trailer_video_scroll_content">
              <img src={Mylan} alt=""></img>
              <h1>Мулан </h1></div>
            <div className="container_trailer_video_scroll_content">
              <img src={Mylan} alt=""></img>
              <h1>Мулан </h1></div>
            <div className="container_trailer_video_scroll_content">
              <img src={Mylan} alt=""></img>
              <h1>Мулан </h1></div>
            <div className="container_trailer_video_scroll_content">
              <img src={Mylan} alt=""></img>
              <h1>Мулан </h1></div>
          </div>
          <div className="container_popular_films">
            <div className="container_popular_films_nav">
              <div className="container_popular_films_nav_title">
                <h1>Популярные фильмы</h1>
              </div>
              <div className="container_popular_films_nav_line"></div>
              <div className="container_popular_films_nav_date">
                <h1>Всё время</h1>
                <h1>2023</h1>
                <h1>2022</h1>
                <h1>2021</h1>
                <h1>2020</h1>
                <h1>2019</h1>
                <h1>2018</h1>
              </div>
            </div>
            <div className="container_popular_films_grid">
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
            <div className="container_popular_films_grid_paginashion">
              <img src={arrow_left} alt="" />
              <h1>4/15</h1>
              <img src={arrow_right} alt="" />
            </div>
            <div className="container_pipular_person">
              <div className="container_pipular_person_date">
                <h1>Популярные персоны</h1>
                <div className="container_pipular_person_date_time">
                  <h1>Zа год</h1>
                  <h1>За месяц</h1>
                  <h1>За неделю</h1>
                </div>
              </div>
              <div className="container_pipular_person_grid">
                <div className="container_pipular_person_grid_card">
                  <img src={persone_card} alt="" />
                  <div className="container_pipular_person_grid_card_reiting">
                    <h1>1-е место</h1>
                  </div>
                  <div className="container_pipular_person_grid_card_opanie">
                    <h1>Квентин Тарантино</h1>
                    <h2>Quentin Tarantino</h2>
                    <p>57 лет</p>
                  </div>
                </div>
                <div className="container_pipular_person_grid_card">
                  <img src={image_26} alt="" />
                  <div className="container_pipular_person_grid_card_reiting">
                    <h1>2-е место</h1>
                  </div>
                  <div className="container_pipular_person_grid_card_opanie">
                    <h1>Джейсон Стейтем</h1>
                    <h2>Jason Statham</h2>
                    <p>52 года</p>
                  </div>
                </div>
                <div className="container_pipular_person_grid_card_spisok_reiting">
                  <div className="container_pipular_person_grid_card_spisok">
                    <div className="container_pipular_person_grid_card_spisok_name">
                      <h1>Тинто Брасс</h1>
                      <h2>Tinto Brass</h2>
                      <p>87 лет</p>
                    </div>
                    <div className="container_pipular_person_grid_card_spisok_reitink">
                      <h1>3-е место</h1>
                    </div>
                  </div>
                  <div className="ontainer_pipular_person_grid_card_spisok_line">
                  </div>
                  <div className="container_pipular_person_grid_card_spisok">
                    <div className="container_pipular_person_grid_card_spisok_name">
                      <h1>Джеки Чан</h1>
                      <h2>Jackie Chan</h2>
                      <p>66 лет</p>
                    </div>
                    <div className="container_pipular_person_grid_card_spisok_reitink">
                      <h1>4-е место</h1>
                    </div>
                  </div>
                  <div className="ontainer_pipular_person_grid_card_spisok_line">
                  </div>
                  <div className="container_pipular_person_grid_card_spisok">
                    <div className="container_pipular_person_grid_card_spisok_name">
                      <h1>Том Харди</h1>
                      <h2>Tom Hardy</h2>
                      <p>42 года</p>
                    </div>
                    <div className="container_pipular_person_grid_card_spisok_reitink">
                      <h1>5-е место</h1>
                    </div>
                  </div>
                  <div className="ontainer_pipular_person_grid_card_spisok_line">
                  </div>
                  <div className="container_pipular_person_grid_card_spisok">
                    <div className="container_pipular_person_grid_card_spisok_name">
                      <h1>Акшай Кумар</h1>
                      <h2>Akshay Kumar</h2>
                      <p>52 года</p>
                    </div>
                    <div className="container_pipular_person_grid_card_spisok_reitink">
                      <h1>6-е место</h1>
                    </div>
                  </div>
                  <div className="container_pipular_person_grid_card_spisok_line">
                  </div>
                </div>
              </div>
            </div>
            <div className="container_news">
              <div className="container_trailer_nav">
                <h1>Последние новости</h1>
                <h2>Все новости <img src={arrow} alt="" /><a href="#"></a></h2>
              </div>
              <div className="container_news_last">
                <div className="container_news_active">
                  <img src={last_news_active} alt="" />
                  <div className="container_news_active_head">
                    <h1>12 Окт 2023</h1>
                    <div className="container_news_active_reiting">
                      <img src={views} alt="" />
                      <h2>242</h2>
                      <div className="container_news_active_comments">
                        <img src={sms} alt="" />
                        <h2>14</h2>
                      </div>
                    </div>
                  </div>
                  <div className="container_news_active_body_title">
                    <h1>Не время умирать. Перенос релиза фильма  </h1>
                    <p>Но действия представителей оппозиции в равной степени предоставлены сами себе. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль ключевых факторов.</p>
                  </div>

                </div>
                <div className="container_news_rezerve">
                  <div className="container_news_rezerve_content">
                    <h1>12 Окт 2023</h1>
                    <h2>Как изменили Соника с
                      последнего анонса </h2>
                  </div>
                  <div className="container_news_rezerve_content" id='blue'>
                    <button>Читать новость</button>
                  </div>
                  <div className="container_news_rezerve_content" id='news_2'>
                    <h1>12 Окт 2023</h1>
                    <h2>От этой новости вы будете
                      шокированы до завтра</h2>
                  </div>
                  <div className="container_news_rezerve_content" id='news_3'>
                    <h1>12 Окт 2023</h1>
                    <h2>Вот это, конечно, да!</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="container_footer">
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
        </div>
      </footer>
    </>
  )
}

export default App

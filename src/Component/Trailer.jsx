import "../App.css";
import "../media.css";
import img from "../img/image 1.png";
import arrow from "../img/Arrow 1.png";
import forsacre from "../img/forsach9.png";
import play from "../img/Polygon 2.png";
import likeAP from "../img/likeAP.png";
import likeDW from "../img/likeDW.png";
import Mylan from "../img/Mylan.png";
import arrow_left from "../img/arrow_left.png";
import arrow_right from "../img/arrow_right.png";
import persone_card from "../img/person_card.png";
import last_news_active from "../img/last_news.png";
import sms from "../img/sms.png";
import views from "../img/views.png";
import image_26 from "../img/image_26.png";
function Trailer() {
  return (
    <>
      <div className="container_trailer">
        <div className="container_trailer_nav">
          <h1>Новые трейлеры</h1>
          <h2>
            Все трейлеры <img src={arrow} alt="" />
            <a href="#"></a>
          </h2>
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
            <h1>Мулан </h1>
          </div>
          <div className="container_trailer_video_scroll_content">
            <img src={Mylan} alt=""></img>
            <h1>Мулан </h1>
          </div>
          <div className="container_trailer_video_scroll_content">
            <img src={Mylan} alt=""></img>
            <h1>Мулан </h1>
          </div>
          <div className="container_trailer_video_scroll_content">
            <img src={Mylan} alt=""></img>
            <h1>Мулан </h1>
          </div>
          <div className="container_trailer_video_scroll_content">
            <img src={Mylan} alt=""></img>
            <h1>Мулан </h1>
          </div>
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
                <div className="ontainer_pipular_person_grid_card_spisok_line"></div>
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
                <div className="ontainer_pipular_person_grid_card_spisok_line"></div>
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
                <div className="ontainer_pipular_person_grid_card_spisok_line"></div>
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
                <div className="container_pipular_person_grid_card_spisok_line"></div>
              </div>
            </div>
          </div>
          <div className="container_news">
            <div className="container_trailer_nav">
              <h1>Последние новости</h1>
              <h2>
                Все новости <img src={arrow} alt="" />
                <a href="#"></a>
              </h2>
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
                  <h1>Не время умирать. Перенос релиза фильма </h1>
                  <p>
                    Но действия представителей оппозиции в равной степени
                    предоставлены сами себе. В рамках спецификации современных
                    стандартов, стремящиеся вытеснить традиционное производство,
                    нанотехнологии указаны как претенденты на роль ключевых
                    факторов.
                  </p>
                </div>
              </div>
              <div className="container_news_rezerve">
                <div className="container_news_rezerve_content">
                  <h1>12 Окт 2023</h1>
                  <h2>Как изменили Соника с последнего анонса </h2>
                </div>
                <div className="container_news_rezerve_content" id="blue">
                  <button>Читать новость</button>
                </div>
                <div className="container_news_rezerve_content" id="news_2">
                  <h1>12 Окт 2023</h1>
                  <h2>От этой новости вы будете шокированы до завтра</h2>
                </div>
                <div className="container_news_rezerve_content" id="news_3">
                  <h1>12 Окт 2023</h1>
                  <h2>Вот это, конечно, да!</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Trailer;

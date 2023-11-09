import '../App.css'
import '../media.css'
import vk from '../img/vk.png'
import inst from '../img/inst.png'
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import youtube from '../img/youtube.png'
function Footer_ashifa() {
  return (
    <>
      <div className="footer_ashifa">
        <div className="footer_soc_seti_container">
          <a href="#">
            <img src={vk} alt="" />
          </a>
          <a href="#">
            <img src={inst} alt="" />
          </a>
          <a href="#">
            <img src={facebook} alt="" />
          </a>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
          <a href="#">
            <img src={youtube} alt="" />
          </a>
        </div>
        <div className="footer_ashifa_nav">
          <div className="nav_a">
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
        </div>
        <div className="footer_ashifa_prava">
          <h1>2023 © Kinoarea. Все права защищены</h1>
        </div>
        <div className="footer_ashifa_politika">
          <a href="#">Политика конфиденциальности</a>
        </div>
      </div>
    </>
  );
}
export default Footer_ashifa;

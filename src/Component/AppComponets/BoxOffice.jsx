import "./BoxOffice.css";
import BladShot from "./img/BladShot.png";
function BoxOffice() {
  return (
    <>
      <div className="BO_hat">
        <div className="BO_hat_left">
          <h className="BO_hat_left_txt_1">Кассовые сборы</h>
          <h className="BO_hat_left_txt_2">13 марта — 15 марта</h>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="2"
          viewBox="0 0 54 2"
          fill="none"
        >
          <path
            d="M1 1H52.5"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <div className="BO_hat_right_menu">
          <h className="BO_hat_right_men_txt">Россия</h>
          <h className="BO_hat_right_men_txt">Весь мир</h>
          <h className="BO_hat_right_men_txt">США и Канада</h>
        </div>
      </div>
      <div className="BO_Content">
        <div className="BO_Content_card">
          <div className="BO_Content_card_img"></div>
          <div className="BO_Content_card_txt">
            <h className="BO_Content_card_h1">1. Бладшот</h>
            <h className="BO_Content_card_h2">$13 млн</h>
            <h className="BO_Content_card_h3">$15.1 млн за 4 недели</h>
          </div>
        </div>
        <div className="BO_Content_card">
          <div className="BO_Content_card_img"></div>
          <div className="BO_Content_card_txt">
            <h className="BO_Content_card_h1">1. Бладшот</h>
            <h className="BO_Content_card_h2">$13 млн</h>
            <h className="BO_Content_card_h3">$15.1 млн за 4 недели</h>
          </div>
        </div>
        <div className="BO_Content_card">
          <div className="BO_Content_card_img"></div>
          <div className="BO_Content_card_txt">
            <h className="BO_Content_card_h1">1. Бладшот</h>
            <h className="BO_Content_card_h2">$13 млн</h>
            <h className="BO_Content_card_h3">$15.1 млн за 4 недели</h>
          </div>
        </div>
        <div className="BO_Content_card">
          <div className="BO_Content_card_img"></div>
          <div className="BO_Content_card_txt">
            <h className="BO_Content_card_h1">1. Бладшот</h>
            <h className="BO_Content_card_h2">$13 млн</h>
            <h className="BO_Content_card_h3">$15.1 млн за 4 недели</h>
          </div>
        </div>
        <div className="BO_Content_card">
          <div className="BO_Content_card_img"></div>
          <div className="BO_Content_card_txt">
            <h className="BO_Content_card_h1">1. Бладшот</h>
            <h className="BO_Content_card_h2">$13 млн</h>
            <h className="BO_Content_card_h3">$15.1 млн за 4 недели</h>
          </div>
        </div>
      </div>
    </>
  );
}
export default BoxOffice;

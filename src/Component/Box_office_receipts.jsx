import '../App.css'
import '../media.css'
import kassa_1 from '../img/kassa_1.png'

function Box_office_receipts() {
  return (
    <>
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
    </>
  );
}
export default Box_office_receipts;

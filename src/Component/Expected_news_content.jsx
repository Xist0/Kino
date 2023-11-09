import '../App.css'
import '../media.css'
import img from '../img/image 1.png'
import arrow_left from '../img/arrow_left.png'
import arrow_right from '../img/arrow_right.png'
function Expected_news_content() {
  return (
    <>
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
        <div className="expected_news_item_nav" id="news_item_2">
          <img src={arrow_left} alt="" />
          <h1>2/5</h1>
          <img src={arrow_right} alt="" />
        </div>
      </div>
    </>
  );
}
export default Expected_news_content;

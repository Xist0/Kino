import '../App.css'
import '../media.css'
import arrow_left from '../img/arrow_left.png'
import arrow_right from '../img/arrow_right.png'
function Expected_news_items() {
  return (
    <>
      <div className="expected_news_items">
        <div className="expected_news_items_title">
          <h1>Ожидаемые новинки</h1>
        </div>
        <div className="expected_news_item_nav" id="news_item_1">
          <img src={arrow_left} alt="" />
          <h1>2/5</h1>
          <img src={arrow_right} alt="" />
        </div>
      </div>
    </>
  );
}
export default Expected_news_items;

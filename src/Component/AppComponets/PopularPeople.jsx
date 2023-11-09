import "./PopularPeople.css";
function PopularPeople() {
  return (
    <>
      <div className="PPe">
        <div className="PPe_hat">
          <h className="PPe_hat_txt">Популярные персоны</h>
          <div className="PPe_hat_txt_menu">
            <h className="PPe_hat_txt_menu_text">За год</h>
            <h className="PPe_hat_txt_menu_text">За месяц</h>
            <h className="PPe_hat_txt_menu_text">За неделю</h>
          </div>
        </div>
      </div>
      <div className="PPe_Person">
        <div className="PPe_Person_left">
          <div className="PPe_PersonCard">
            <div className="PPe_PersonCard_hat">
              <h className="PPe_PersonCard_hat_txt">1-е место</h>
            </div>
            <div className="PPe_PersonCard_bot_txt">
              <h className="PPe_PersonCard_bot_txt_1">Квентин Тарантино</h>
              <h className="PPe_PersonCard_bot_txt_2">Quentin Tarantino</h>
              <h className="PPe_PersonCard_bot_txt_3">57 лет</h>
            </div>
          </div>
          <div className="PPe_PersonCard">
            <div className="PPe_PersonCard_hat">
              <h className="PPe_PersonCard_hat_txt">1-е место</h>
            </div>
            <div className="PPe_PersonCard_bot_txt">
              <h className="PPe_PersonCard_bot_txt_1">Квентин Тарантино</h>
              <h className="PPe_PersonCard_bot_txt_2">Quentin Tarantino</h>
              <h className="PPe_PersonCard_bot_txt_3">57 лет</h>
            </div>
          </div>
        </div>
        <div className="PPe_Person_right">
          <div className="PPE_List">
            <div className="PPE_List_intems">
              <div className="PPE_List_intem_right">
                <h className="PPE_List_h_1">Тинто Брасс</h>
                <h className="PPE_List_h_2">Tinto Brass</h>
                <h className="PPE_List_h_3">87 лет</h>
              </div>
              <h className="PPE_Lust_right_txt">3-е место</h>
            </div>
            <line></line>
            <div className="PPE_List_intems">
              <div className="PPE_List_intem_right">
                <h className="PPE_List_h_1">Тинто Брасс</h>
                <h className="PPE_List_h_2">Tinto Brass</h>
                <h className="PPE_List_h_3">87 лет</h>
              </div>
              <h className="PPE_Lust_right_txt">3-е место</h>
            </div>
            <line></line>
            <div className="PPE_List_intems">
              <div className="PPE_List_intem_right">
                <h className="PPE_List_h_1">Тинто Брасс</h>
                <h className="PPE_List_h_2">Tinto Brass</h>
                <h className="PPE_List_h_3">87 лет</h>
              </div>
              <h className="PPE_Lust_right_txt">3-е место</h>
            </div>
            <line></line>
            <div className="PPE_List_intems">
              <div className="PPE_List_intem_right">
                <h className="PPE_List_h_1">Тинто Брасс</h>
                <h className="PPE_List_h_2">Tinto Brass</h>
                <h className="PPE_List_h_3">87 лет</h>
              </div>
              <h className="PPE_Lust_right_txt">3-е место</h>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PopularPeople;

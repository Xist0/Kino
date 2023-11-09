import '../App.css'
import '../media.css'
import logo from '../img/logo.png'
function Footer_sms_email_container() {
  return (
    <>
      <div className="footer_sms_email_container">
        <div className="footer_sms_email_title_name">
          <img src={logo} alt="" />
          <h1>Kinoarea</h1>
        </div>
        <div className="footer_sms_email_title">
          <h1>Подпишитесь на E-mail рассылку</h1>
        </div>
        <div className="footer_sms_email_opisanie">
          <p>
            Если хотиет быть в курсе последних новостей и новинок кино -
            заполните форму ниже и оформите бесплатную E-mail рассылку!{" "}
          </p>
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
    </>
  );
}
export default Footer_sms_email_container;

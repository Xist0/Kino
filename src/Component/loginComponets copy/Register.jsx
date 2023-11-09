import "./Login.css";
import { Link} from 'react-router-dom'

function Register() {
  return (
    <>
      <div className="Reg_form">
        <h className="L_Heading">Зарегистрироваться</h>
        <label title="Имя">
          <input className="L_lable" type="text" />
        </label>
        <label title="Фамилия">
          <input className="L_lable" type="text" />
        </label>
        <label title="Придумайте логин">
          <input className="L_lable" type="text" />
        </label>
        <label title="Придумайте пароль">
          <input className="L_lable" type="text" />
        </label>
        <label title="Повторите пароль">
          <input className="L_lable" type="text" />
        </label>
        <label title="Номер телефона или e-mail">
          <input className="L_lable" type="text" />
        </label>
        <div className="checkbox">
          <input type="checkbox" id="checkBox" className="styled-checkbox" />
          <label htmlFor="checkBox">
            Соглашаюсь на условия политики конфиденциальности
          </label>
          <input type="checkbox" id="checkBox" className="styled-checkbox" />
          <label htmlFor="checkBox">
            Соглашаюсь на обработку персональных данных
          </label>
        </div>
        <Link to='/Login'><button className="L_button_Yellow">Зарегистрироваться</button></Link>
      </div>
    </>
  );
}
export default Register;

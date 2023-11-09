import "./Login.css";
import { Link, useParams } from 'react-router-dom'

function RecoverPassword() {
  return (
    <div className="RecoverPassword">
      <h1 className="L_Heading">Восстановить пароль</h1>
      <label title="Почта или номер телефона">
        <input className="L_lable" type="text" />
      </label>
      <div className="R_Buttons">
        <button className="R_Buttons_B">Отправить</button>
        <label title="Полученный код">
          <input className="L_lable_2" type="text" />
        </label>
      </div>
      <Link to='/login'><button className="L_button_Yellow">Далее</button></Link>
    </div>
  );
}

export default RecoverPassword;

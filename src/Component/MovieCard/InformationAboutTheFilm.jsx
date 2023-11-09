import Pers from "./img/Pers.png";
import "./InformationAboutTheFilm.css";
function InformationAboutTheFilm() {
  return (
    <>
      <div className="IFATF container">
        <div className="IFATF_hat">
          <div className="IFATF_hat_pers">
            <img className="IFATF_hat_pers_img" src={Pers}></img>
            <div className="IFATF_hat_pers_txt">
              <h className="IFATF_hat_pers_txt_1">Фрэнсис Аннан</h>
              <h className="IFATF_hat_pers_txt_2">Francis Annan</h>
              <h className="IFATF_hat_pers_txt_3">Режисёр</h>
            </div>
          </div>
          <div className="IFATF_hat_pers">
            <img className="IFATF_hat_pers_img" src={Pers}></img>
            <div className="IFATF_hat_pers_txt">
              <h className="IFATF_hat_pers_txt_1">Фрэнсис Аннан</h>
              <h className="IFATF_hat_pers_txt_2">Francis Annan</h>
              <h className="IFATF_hat_pers_txt_3">Режисёр</h>
            </div>
          </div>
          <div className="IFATF_P">
            <div class="IFATF_production">
              <p className="IFATF_production_P">Производство:</p>
              <ol className="IFATF_production_ol">
                <li>Arclight Films</li>
                <li>Beagle Pug Films</li>
                <li>Footprint Films</li>
              </ol>
            </div>
            <div class="IFATF_production">
              <p className="IFATF_production_P">Спецэффекты:</p>
              <ol className="IFATF_production_ol">
                <li>Particular Crowd</li>
                <li>Premiere Picture</li>
                <li>Spier Films</li>
              </ol>
            </div>
            <div class="IFATF_production">
              <p className="IFATF_production_P">Студия дубляжа:</p>
              <ol className="IFATF_production_ol">
                <li>Пифагор</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default InformationAboutTheFilm;

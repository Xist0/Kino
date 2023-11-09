import '../App.css'
import '../media.css'

function Kino() {
  return (
    <>
      <div className="container_kino">
        <div className="container_kino_nav_title">
          <h1>Сейчас в кино</h1>
        </div>
        <div className="container_kino_nav_line"></div>
        <div className="container_kino_nav_grid">
          <div className="container_kino_nav_grid_txt">
            <a href="#">Все </a>
          </div>
          <div className="container_kino_nav_grid_txt">
            <a href="#">Боевики </a>
          </div>
          <div className="container_kino_nav_grid_txt">
            <a href="#">Приключения </a>
          </div>
          <div className="container_kino_nav_grid_txt">
            <a href="#">Комедии </a>
          </div>
          <div className="container_kino_nav_grid_txt">
            <a href="#">Фантастика </a>
          </div>
          <div className="container_kino_nav_grid_txt">
            <a href="#">Триллеры </a>
          </div>
          <div className="container_kino_nav_grid_txt">
            <a href="#">Драма</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Kino;

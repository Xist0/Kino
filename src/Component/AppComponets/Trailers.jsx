import "./Trailers.css";
import Mylan from "./img/Mylan.png";

import YouTubePlayer from "./YouTubePlayer.jsx";
function Trailers() {
  return (
    <>
      <div className="T_hat">
        <h className="T_hat_txt">Новые трейлеры</h>
        <div className="T_hat_left_block">
          <h className="T_hat_left_block_txt">Все трейлеры</h>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="16"
            viewBox="0 0 27 16"
            fill="none"
          >
            <path
              d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.2929L20.3431 0.928934C19.9526 0.53841 19.3195 0.538409 18.9289 0.928934C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM-8.74228e-08 9L26 9L26 7L8.74228e-08 7L-8.74228e-08 9Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="Centered">
        <div className="T_Trailers">
          <div className="T_Trailers_Trailers">
            <YouTubePlayer />
          </div>
        </div>
      </div>
      <div className="Centered">
        <div className="T_txt_and_Evaluation">
          <h className="T_Trailers_txt">Форсаж 9</h>
          <div className="T_Trailers_Evaluation">
            <div className="T_Like_content">
              <div className="T_Like">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                >
                  <g clip-path="url(#clip0_389_1225)">
                    <path
                      d="M6.23888 12.262H3.18597C2.76449 12.262 2.42273 12.6037 2.42273 13.0252V25.2366C2.42273 25.6581 2.76444 25.9999 3.18597 25.9999H6.23883C6.66032 25.9999 7.00207 25.6582 7.00207 25.2366V13.0252C7.00207 12.6037 6.66042 12.262 6.23888 12.262Z"
                      fill="white"
                    />
                    <path
                      d="M25.304 14.2852C25.1694 13.1012 24.0635 12.2621 22.8719 12.2621H16.9216C17.4273 11.3566 17.6987 8.79556 17.6867 7.74937C17.6667 6.01763 16.2326 4.62988 14.5008 4.62988H13.871C13.4492 4.62988 13.1078 4.97123 13.1078 5.39312C13.1078 7.15802 12.4206 10.3436 11.1245 11.6398C10.2521 12.5121 9.50634 12.8282 8.52844 13.317V24.769C10.0256 25.2681 11.9266 26.0001 14.824 26.0001H19.8166C21.4616 26.0001 22.7429 24.4765 22.1054 22.8667C23.0766 22.6021 23.7928 21.7114 23.7928 20.6575C23.7928 20.3601 23.7354 20.0754 23.6318 19.8138C25.2684 19.3679 25.8709 17.3471 24.7349 16.0782C25.1523 15.612 25.3824 14.9743 25.304 14.2852Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_389_1225">
                      <rect
                        width="26"
                        height="26"
                        fill="white"
                        transform="translate(0.870972)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h className="T_Like_txt">3 245</h>
            </div>
            <div className="T_Dislike_content">
              <div className="T_Dislike">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="27"
                  viewBox="0 0 26 27"
                  fill="none"
                >
                  <g clip-path="url(#clip0_389_1216)">
                    <path
                      d="M20.6321 14.6091L23.685 14.6091C24.1065 14.6091 24.4482 14.2674 24.4482 13.8459L24.4482 1.63445C24.4482 1.21296 24.1065 0.871204 23.685 0.871204L20.6321 0.871204C20.2107 0.871204 19.8689 1.21291 19.8689 1.63444L19.8689 13.8459C19.8689 14.2674 20.2106 14.6091 20.6321 14.6091Z"
                      fill="white"
                    />
                    <path
                      d="M1.56693 12.5859C1.70155 13.7698 2.80751 14.609 3.99909 14.609L9.94937 14.609C9.44369 15.5145 9.17227 18.0755 9.1843 19.1217C9.20426 20.8535 10.6384 22.2412 12.3702 22.2412L12.9999 22.2412C13.4218 22.2412 13.7632 21.8999 13.7632 21.478C13.7632 19.7131 14.4504 16.5275 15.7465 15.2313C16.6189 14.359 17.3646 14.0428 18.3425 13.5541L18.3425 2.10206C16.8454 1.60304 14.9444 0.871029 12.047 0.871028L7.05439 0.871028C5.40933 0.871028 4.12812 2.39461 4.76558 4.00438C3.79439 4.26895 3.07817 5.15965 3.07817 6.21356C3.07817 6.51098 3.13555 6.79566 3.23915 7.05729C1.60252 7.5032 1.00011 9.52403 2.13603 10.7929C1.71871 11.2591 1.48857 11.8968 1.56693 12.5859Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_389_1216">
                      <rect
                        width="26"
                        height="26"
                        fill="white"
                        transform="translate(26 26.8711) rotate(-180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h className="T_Like_txt">420</h>
            </div>
          </div>
        </div>
      </div>
      <div className="Centered">
        <div className="container_trailer_video_scroll">
          <div className="container_trailer_video_scroll_content">
            <img src={Mylan} alt=""></img>
            <h1>Мулан </h1>
          </div>
          <div className="container_trailer_video_scroll_content">
            <img src={Mylan} alt=""></img>
            <h1>Мулан </h1>
          </div>
          <div className="container_trailer_video_scroll_content">
            <img src={Mylan} alt=""></img>
            <h1>Мулан </h1>
          </div>
          <div className="container_trailer_video_scroll_content">
            <img src={Mylan} alt=""></img>
            <h1>Мулан </h1>
          </div>
          <div className="container_trailer_video_scroll_content">
            <img src={Mylan} alt=""></img>
            <h1>Мулан </h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default Trailers;

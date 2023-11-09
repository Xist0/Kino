<<<<<<< HEAD
import "./App.css";
import "./media.css";
<script src="./App.jsx"></script>
import Nav from "./Component/Nav.jsx";
import Kino from "./Component/Kino";
import Grid from "./Component/Grid";
import Grid_btn from "./Component/Grid_btn";
import Trailer from "./Component/Trailer";
import Expected_news_items from "./Component/Expected_news_items";
import Expected_news_content from "./Component/Expected_news_content";
import Box_office_receipts from "./Component/Box_office_receipts";
import Footer_sms_email_container from "./Component/Footer_sms_email_container";
import Footer_ashifa from "./Component/Footer_ashifa";
=======
import { useState } from 'react'
import './App.css'
import './media.css'
import logo from './img/logo.png'
import poisk from './img/poisk.png'
import img from './img/image 1.png'
import arrow from './img/Arrow 1.png'
import forsacre from './img/forsach9.png'
import play from './img/Polygon 2.png'
import likeAP from './img/likeAP.png'
import likeDW from './img/likeDW.png'
import Mylan from './img/Mylan.png'
import arrow_left from './img/arrow_left.png'
import arrow_right from './img/arrow_right.png'
import persone_card from './img/person_card.png'
import last_news_active from './img/last_news.png'
import sms from './img/sms.png'
import views from './img/views.png'
import kassa_1 from './img/kassa_1.png'
import vk from './img/vk.png'
import inst from './img/inst.png'
import facebook from './img/facebook.png'
import twitter from './img/twitter.png'
import youtube from './img/youtube.png'
import image_26 from './img/image_26.png'
>>>>>>> 8192da7ba470307b69d2dff1c1ef5b47a3c68049

function App() {
  return (
    <>
      <main>
        <header>
          <Nav />
          <Kino />
          <Grid />
          <Grid_btn />
        </header>
        <Trailer />
      </main>
      <footer>
        <div className="container_footer">
          <Expected_news_items />
          <Expected_news_content />
          <Box_office_receipts />
          <Footer_sms_email_container />
          <Footer_ashifa />
        </div>
      </footer>
    </>
  );
}

export default App;

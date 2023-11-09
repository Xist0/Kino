import "./App.css";
import "./media.css";
import Nav from "./Component/Nav.jsx";
import Kino from "./Component/Kino";
import Grid from "./Component/Grid.jsx";
import Grid_btn from "./Component/Grid_btn";
import Trailer from "./Component/Trailer";
import Expected_news_items from "./Component/Expected_news_items";
import Expected_news_content from "./Component/Expected_news_content";
import Box_office_receipts from "./Component/Box_office_receipts";
import Footer_sms_email_container from "./Component/Footer_sms_email_container";
import Footer_ashifa from "./Component/Footer_ashifa";
<script src="./App.jsx"></script>

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

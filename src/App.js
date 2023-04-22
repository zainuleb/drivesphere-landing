import EUSection from "./component/euSection/EUSection";
import Feature from "./component/features/Feature";
import Footer from "./component/footer/Footer";
import Main from "./component/main/Main";
import Backtop from "./component/utils/backtop/Backtop";
import Preloader from "./component/utils/preloader/Preloader";

function App() {
  return (
    <div className="App">
      <Preloader />
      <Backtop />
      <Main />
      <Feature />
      <EUSection />
      <Footer />
    </div>
  );
}

export default App;

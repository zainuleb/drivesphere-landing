import React, { useState, useEffect } from "react";
import EUSection from "./component/euSection/EUSection";
import Feature from "./component/features/Feature";
import Footer from "./component/footer/Footer";
import Main from "./component/main/Main";
import Backtop from "./component/utils/backtop/Backtop";
import Preloader from "./component/utils/preloader/Preloader";
import Header from "./component/header/Header";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPreloader(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="App">
      {showPreloader && <Preloader />}
      <Backtop />
      <Main />
      <Header />
      <Feature />
      <EUSection />
      <Footer />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import EUSection from "./component/euSection/EUSection";
import Feature from "./component/features/Feature";
import Footer from "./component/footer/Footer";
import Main from "./component/main/Main";
import Backtop from "./component/utils/backtop/Backtop";
import Preloader from "./component/utils/preloader/Preloader";
import Pricing from "./component/pricing/Pricing";
import SubscriptionForm from "./component/subscription/SubscriptionForm";
import FooterTwo from "./component/footerTwo/FooterTwo";
import AboutUs from "./component/aboutUs/AboutUs";
import MembershipProcess from "./component/membershipProcess/MembershipProcess";

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
      <Feature />
      <MembershipProcess />
      <EUSection />
      <AboutUs />
      <Pricing />
      <SubscriptionForm />
      <Footer />
      <FooterTwo />
    </div>
  );
}

export default App;

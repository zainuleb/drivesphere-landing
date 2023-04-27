import React, { useState, useEffect } from "react";
import EUSection from "../component/euSection/EUSection";
import Main from "../component/main/Main";
import Backtop from "../component/utils/backtop/Backtop";
import Preloader from "../component/utils/preloader/Preloader";
import SubscriptionForm from "../component/subscription/SubscriptionForm";
import FooterTwo from "../component/footerTwo/FooterTwo";
import AboutUs from "../component/aboutUs/AboutUs";
import OutComes from "../component/outComes/OutComes";
import WhoShouldJoin from "../component/whoShouldJoin/WhoShouldJoin";
import Membership from "../component/membership/Membership";

const MainPage = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPreloader(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div>
      {" "}
      {showPreloader && <Preloader />}
      <Backtop />
      <Main />
      <OutComes />
      <EUSection />
      <WhoShouldJoin />
      <Membership />
      <AboutUs />
      <SubscriptionForm />
      <FooterTwo />
    </div>
  );
};

export default MainPage;

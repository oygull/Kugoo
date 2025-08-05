import React from "react";
import Hero from "../../components/Hero";
import ProductWrap from "../../components/ProductWrap";
import Delivery from "../../components/Delivery";
import Categories from "../../components/Categories";
import Russia from "../../components/Russia";
import Prices from "../../components/Prices";
import Reviews from "../../components/Reviews";
import Blog from "../../components/Blog";
import Popular from "../../components/Popular";
import Videos from "../../components/Videos";
import Faq from "../../components/Faq";

type AlertProps = {
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const Main: React.FC<AlertProps> = ({setShowAlert}) => {
  return(
    <div>
      <Hero/>
      <ProductWrap setShowAlert={setShowAlert}/>
      <Delivery/>
      <Categories/>
      <Russia/>
      <Prices/>
      <Reviews/>
      <Videos/>
      <Blog/>
      <Faq/>
      <Popular setShowAlert={setShowAlert}/>
    </div>
  )
};

export default Main;
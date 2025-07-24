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

function Main () {
  return(
    <div>
      <Hero/>
      <ProductWrap />
      <Delivery/>
      <Categories/>
      <Russia/>
      <Prices/>
      <Reviews/>
      <Blog/>
      <Popular/>
    </div>
  )
};

export default Main;
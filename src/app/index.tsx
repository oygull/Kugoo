import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HeaderTop from "../components/HeaderTop";
import { useProductStore } from "../store/useProductStore";
import Header from "../components/Header";
import HeaderBottom from "../components/HeaderBottom";
import Main from "../pages/Main";
import Footer from "../components/Footer";
import dataArr from "./assets/data/dataArr";

function App() {

  const setProducts = useProductStore((state) => state.setProducts)

  useEffect(() => {
    setProducts(dataArr)
  }, [setProducts])

  return(
    <div>
      <HeaderTop/>
      <Header/>
      <HeaderBottom/>
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
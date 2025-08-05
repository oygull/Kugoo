import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HeaderTop from "../components/HeaderTop";
import { useProductStore } from "../store/useProductStore";
import Header from "../components/Header";
import HeaderBottom from "../components/HeaderBottom";
import Main from "../pages/Main";
import Footer from "../components/Footer";
import dataArr from "./assets/data/dataArr";
import Services from "../pages/Services";
import Cooperation from "../pages/Cooperation";
import Test from "../pages/Test";
import About from "../pages/About";
import DeliveryPayment from "../pages/DeliveryPayment";
import ProductCatalog from "../pages/ProductCatalog";
import CategoryEach from "../pages/CategoryEach";
import ItemInner from "../pages/ItemInner";

function App() {

  const setProducts = useProductStore((state) => state.setProducts);

  useEffect(() => {
    setProducts(dataArr)
  }, [setProducts]);

  const [showAlert, setShowAlert] = useState(false);

  return(
    <div>
      {
        showAlert && 
        <div className="addedAlert">
            Product added to basket!
        </div>
      }
      <HeaderTop/>
      <Header/>
      <HeaderBottom/>
      <Routes>
        <Route path="/" element={<Main setShowAlert={setShowAlert}/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/cooperation" element={<Cooperation setShowAlert={setShowAlert}/>}/>
        <Route path="/testDrive" element={<Test setShowAlert={setShowAlert}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/paymentDelivery" element={<DeliveryPayment/>}/>
        <Route path="/category" element={<ProductCatalog setShowAlert={setShowAlert}/>}/>
        <Route path="/:catId" element={<CategoryEach setShowAlert={setShowAlert} />}/>
         <Route path="/:catId/:productId" element={<ItemInner setShowAlert={setShowAlert}/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
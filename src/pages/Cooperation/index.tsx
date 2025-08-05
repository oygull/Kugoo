import React from "react";
import styles from "./cooperation.module.scss";
import BuyItem from "../../components/BuyItem";
import Popular from "../../components/Popular";
import Certificate  from "../../components/Certificate";
import Plans from "../../components/Plans";
import Reviews from "../../components/Reviews";
import Socials from "../../components/Socials";

type AlertProps = {
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cooperation: React.FC<AlertProps> = ({setShowAlert}) =>{
  return(
    <div>
      <BuyItem/>
      <Popular setShowAlert={setShowAlert}/>
      <Certificate/>
      <Plans/>
      <Reviews/>
      <Socials/>
    </div>
  )
};

export default Cooperation;
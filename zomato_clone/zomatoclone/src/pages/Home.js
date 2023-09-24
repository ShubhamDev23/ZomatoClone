import React, { useState } from 'react'
import Header from '../components/header/Header'
import Tabs from '../components/tabOptions/Tabs'
import Delivery from '../components/delivery/Delivery';
import NightLife from '../components/nightlife/NightLife';
import DiningOut from '../components/diningOut/DiningOut'
import Filters from '../components/common/Filters';
import Footer from '../components/footer/Footer';
function Home() {

    const [activetab,setactivetab]=useState("Delivery");
  return (
    <div>

        <Header/>
        <Tabs activetab={activetab} setactivetab={setactivetab} />
        {switchTabs(activetab)}
        <Filters/>
        <Footer/>
    </div>
  )

}
const switchTabs=(tab)=>{
    switch(tab){
        
        case "Dining Out":
            return <DiningOut/>;
        case "Night Life":
            return <NightLife/>;
        default:
            return <Delivery/>;
    };
}


export default Home

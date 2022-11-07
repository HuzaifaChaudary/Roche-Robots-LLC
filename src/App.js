import './App.css';


import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { createContext, useState } from 'react';
import MainBody from './Components/Body/MainBody';
import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {
  gtmId: 'GTM-TXPJCZF',
  dataLayer: {
      userId: '001',
      userProject: 'project'
  }
}
export  const CategoryContext=createContext();


function App() {
  TagManager.dataLayer(tagManagerArgs)
  const[ctIndex,setIndex]=useState(0);
  const getIndex = (index)=>{
    setIndex(index);
    
    
  }

  return (
    <CategoryContext.Provider value={ctIndex}>

      <Header onClickCategory={getIndex} ></Header>
      <MainBody onClickCategory={getIndex} ></MainBody>
      <Footer></Footer>

    </CategoryContext.Provider>
  );
}

export default App;

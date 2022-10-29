import './App.css';


import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Body from './Components/Body/Body';
import { createContext, useState } from 'react';
export  const CategoryContext=createContext();

function App() {
  const[ctIndex,setIndex]=useState(0);
  const getIndex = (index)=>{
    setIndex(index);
    
    
  }

  return (
    <CategoryContext.Provider value={ctIndex}>

      <Header onClickCategory={getIndex} ></Header>
      <Body ></Body>
      <Footer></Footer>

    </CategoryContext.Provider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Headingcontent from './components/Headingcontent/Headingcontent';
import ButtonPage from "./ButtonPage";

function App() {
  return (
      <>
      
    <Navbar/>
    <Headingcontent/>
   <ButtonPage/>
   
    </>
    );
}

export default App;

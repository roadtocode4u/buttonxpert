import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Headingcontent from './components/Headingcontent/Headingcontent';

function App() {
  return (
    <>
    <Navbar/>
    <Headingcontent/>
    </>
  )
}

export default App;

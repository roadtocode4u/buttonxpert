import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Tavbar from './components/Tavbar/Tavbar';
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

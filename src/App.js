import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ButtonPage from "./ButtonPage";
import Home from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buttonpage" element={<ButtonPage />} />
        </Routes>
      </BrowserRouter>

import './App.css';
import Navbar from './components/Navbar/Navbar'
import Headingcontent from './components/Headingcontent/Headingcontent';

function App() {
  return (
      <>
      
    <Navbar/>
    <Headingcontent/>
    </>
  );
}

export default App;

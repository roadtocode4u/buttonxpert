import React from 'react'
import Button from "./components/ButtonComponent/Button3D";
import Card from './components/Card/Card'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ButtonGradient from './components/ButtonComponent/ButtonGradient';
import Button3D from './components/ButtonComponent/Button3D';


function ButtonPage() {
  return (
    <div className='btn-container'>
      <div className='row'>
        <div className='col-md-5'>
          Buttons
        </div>
        <div className='col-md-7'>
          cards
        </div>
      </div>

    </div>
  )
}

export default ButtonPage
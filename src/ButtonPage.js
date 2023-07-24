import React from 'react'
import Button from "./components/ButtonComponent/Button3D";
import Card from './components/Card/Card'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ButtonGradient from './components/ButtonComponent/ButtonGradient';
import Button3D from './components/ButtonComponent/Button3D';
import ButtonRetro from './components/ButtonComponent/ButtonRetro';
import ShadowBorder from './components/ButtonComponent/ShadowBorder';
import TransitionBtn from './components/ButtonComponent/TransitionBtn';
import TrasitionRounded from './components/ButtonComponent/TrasitionRounded';
import ShadowOnclick from './components/ButtonComponent/ShadowOnclick';
import SlidingButton from './components/ButtonComponent/SlidingButton';
import ArrowHover from './components/ButtonComponent/ArrowHover';


function ButtonPage() {
  return (
    <div className='btn-container'>
      <div className='row'>
        <div className='col-md-5'>
          Buttons
          <Button3D/>
          <ButtonGradient/>
          <ButtonRetro/>
          <ShadowBorder/>
          <TransitionBtn/>
          <TrasitionRounded/>
          <ShadowOnclick/>
          <SlidingButton/>
          <ArrowHover/>
        </div>
        <div className='col-md-7'>
          cards
        </div>
      </div>

    </div>
  )
}

export default ButtonPage
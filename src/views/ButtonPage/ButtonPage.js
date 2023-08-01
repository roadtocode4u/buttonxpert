import React, { useState } from 'react';
import './ButtonPage.css';

function ButtonPage() {
  const [defaultCodepenUrl, setDefaultCodepenUrl] = useState('https://codepen.io/Harshada-Mhase/embed/ExOeEpL?default-tab=html%2Cresult');

  const handleButtonClick = (url) => {
    setDefaultCodepenUrl(url);
  };

  return (
    <>
      <div className='container content-container-grp'>
        <div className='row'>
          <div className='col-md-6'>
            <h2 className='text-center mt-5 main-heading-btn'>Click On Button and Explore!</h2>

            <div className='button-row-1'>
              <button
                style={{ "textDecoration": "none", 'marginLeft': '30px' }}
                className='css-button-shadow-border-sliding--yellow mt-5'
                onClick={() => handleButtonClick('https://codepen.io/Harshada-Mhase/embed/ExOeEpL?default-tab=html%2Cresult')}
              >
                Click me!
              </button>
              <button
                style={{ "textDecoration": "none", 'marginLeft': '30px' }}
                className='css-button-3d--rose'
                onClick={() => handleButtonClick('https://codepen.io/Harshada-Mhase/embed/JjeZyWG?default-tab=html%2Cresult')}
              >
                Click me!
              </button>
              <button
                style={{ "textDecoration": "none", 'marginLeft': '30px' }}
                className='css-button-gradient--1'
                onClick={() => handleButtonClick('https://codepen.io/Harshada-Mhase/embed/xxQapGM?default-tab=html%2Cresult')}
              >
                Click me!
              </button>
            </div>

            <div>
              <button
                style={{ "textDecoration": "none", 'marginLeft': '30px' }}
                className='css-button-retro--blue mt-5'
                onClick={() => handleButtonClick('https://codepen.io/Harshada-Mhase/embed/VwVdzpP?default-tab=html%2Cresult')}
              >
                Click me!
              </button>
              <button
                style={{ "textDecoration": "none", 'marginLeft': '30px' }}
                className='css-button-shadow-border-sliding--sky mt-5'
                onClick={() => handleButtonClick('https://codepen.io/Harshada-Mhase/embed/zYMJprm?default-tab=html%2Cresult')}
              >
                Click me!
              </button>
              <button
                style={{ "textDecoration": "none", 'marginLeft': '30px' }}
                className='css-button-rounded--red'
                onClick={() => handleButtonClick('https://codepen.io/Harshada-Mhase/embed/zYMJRrx?default-tab=html%2Cresult')}
              >
                Click me!
              </button>
            </div>

            <div>
              <button
                style={{ "textDecoration": "none", 'marginLeft': '30px' }}
                className='css-button-sliding-to-top--sky mt-5'
                onClick={() => handleButtonClick('https://codepen.io/Yogita-Shete/embed/OJaaPoR?default-tab=html%2Cresult')}
              >
                Click me!
              </button>
              <button
                style={{ "textDecoration": "none", 'marginLeft': '30px' }}
                className='css-button-sliding-to-bottom--black mt-5'
                onClick={() => handleButtonClick('https://codepen.io/Yogita-Shete/embed/JjeeomV?default-tab=html%2Cresult')}
              >
                Click me!
              </button>
              <button
                style={{ "textDecoration": "none", 'marginLeft': '30px' }}
                className='css-button-sliding-to-left--yellow mt-5'
                onClick={() => handleButtonClick('https://codepen.io/Yogita-Shete/embed/OJaaPrb?default-tab=html%2Cresult')}
              >
                Click me!
              </button>
            </div>

            <div>
              <button
                style={{ "textDecoration": "none", 'marginLeft': '30px' }}
                className='css-button-shadow--blue mt-5'
                onClick={() => handleButtonClick('https://codepen.io/Yogita-Shete/embed/bGQQNZR?default-tab=html%2Cresult')}
              >
                Click me!
              </button>
              <button
                style={{ "textDecoration": "none", 'marginLeft': '30px' }}
                className='css-button-sharp--black mt-5'
                onClick={() => handleButtonClick('https://codepen.io/Yogita-Shete/embed/vYQQEwL?default-tab=html%2Cresult')}
              >
                Click me!
              </button>
              <button
                style={{ "textDecoration": "none", 'marginLeft': '30px' }}
                className='css-button-neumorphic mt-5'
                onClick={() => handleButtonClick('https://codepen.io/Yogita-Shete/embed/mdQQyZE?default-tab=html%2Cresult')}
              >
                Click me!
              </button>
            </div>
          </div>

          <div className='col-md-6'>
            <iframe
              height="500"
              className="display-container"
              scrolling="no"
              title="ButtonXpert"
              src={defaultCodepenUrl}
              frameborder="no"
              loading="lazy"
              allowtransparency="true"
              allowfullscreen="true"
              name='codepen'
            >
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default ButtonPage;

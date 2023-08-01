import React from 'react';
import './Card.css';

function Card() {
  return (
    <>
      <div className='card'>
        <iframe
          height="350"
          className='iframe-body'
          scrolling="no"
          title="Untitled"
          src="https://codepen.io/Harshada-Mhase/embed/VwVdqoM?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        >
          See the Pen <a href="https://codepen.io/Harshada-Mhase/pen/VwVdqoM">Untitled</a> by Harshada Mhase (<a href="https://codepen.io/Harshada-Mhase">@Harshada-Mhase</a>) on <a href="https://codepen.io">CodePen</a>
        </iframe>
      </div>
    </>
  );
}

export default Card;

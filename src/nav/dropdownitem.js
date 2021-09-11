import './dropdown.css'
import { useState } from 'react';
import rightarrow from '../images/rightarrow.svg'
import rightarrowwithtail from'../images/rightarrowwithtail.svg'
function App(props) {
  return (
    <div className="dropdown">
      <div className='firstcol'>
        <div className='h1 head'>
        <a href='https://jsfiddle.net/5cLf6gck/' >All Jewelry & Accessories</a>
        <img src={rightarrowwithtail} height='12px'alt ='rigtharrowwithtail'/>
        </div>

        <div className='each'>
          <a >{props.name}</a>
          <img src={rightarrow} alt='right arrow' />
        </div>
        <div className='each'>
          <p >{props.name}</p>
          <img src={rightarrow} alt='right arrow' />
        </div>
        <div className='each'>
          <p >{props.name}</p>
          <img src={rightarrow} alt='right arrow' />
        </div>
        <div className='h1 foot'>
        <a href='https://jsfiddle.net/5cLf6gck/' >All Jewelry & Accessories</a>
        <img src={rightarrowwithtail} height='12px'alt ='rigtharrowwithtail'/>
        </div>
      </div>
    
      <div className='second'>
        {props.name}
      </div>
      <div className='third'>
        {props.name}
      </div>
    </div>
  );
}

export default App;

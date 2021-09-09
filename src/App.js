import './App.css';
import logo from './images/logo.svg'
import searchlogoblack from './images/searchblack.svg'
import searchlogowhite from './images/searchwhite.svg'
import cart from './images/cart.svg'

import cancelicon from './images/cancelicon.svg'
import { useState } from 'react';
function App() {
const [hoversearch, sethoversearch] = useState(false)
  return (
    <div className="App">
      <div className='navbar'>
        <div className='above'>
          <img src={logo} width='80px' alt='etsy logo' />
          <div className='searchbar'  onMouseEnter={()=> sethoversearch(true)} onMouseLeave={()=> sethoversearch(false)}>
            <input className='searchfield' ></input>
            <div>
            <img src={cancelicon} alt='searchlogo' className='cancelicon' />
            <img src={hoversearch === true ?searchlogowhite:searchlogoblack} alt='searchlogo'className='searchicon' />
            </div>
          </div>
          <div className='icon'>
          <h2 className='signin'>Sign in</h2>
          <img src={cart} alt='cart'/>
          </div>
        </div>
        <div className='below'>

        </div>

      </div>

    </div>
  );
}

export default App;

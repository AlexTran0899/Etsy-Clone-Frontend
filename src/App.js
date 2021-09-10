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
          <div className='searchbar' onMouseEnter={() => sethoversearch(true)} onMouseLeave={() => sethoversearch(false)}>
            <input className='searchfield' ></input>
            <div>
              <img src={cancelicon} alt='searchlogo' className='cancelicon' />
              <img src={hoversearch === true ? searchlogowhite : searchlogoblack} alt='searchlogo' className='searchicon' />
            </div>
          </div>
          <div className='icon'>
            <h2 className='signin'>Sign in</h2>
            <img src={cart} alt='cart' className='cart' />
          </div>
        </div>
        <div className='below'>
          <ul>
            <li class="one"><a href="#">Halloween Shop</a></li>
            <li class="two"><a href="#">Jewelry & Accessories</a></li>
            <li class="three"><a href="#">Clothing & Shoes</a></li>
            <li class="four"><a href="#">Home & Living</a></li>
            <li class="five"><a href="#">Wedding & Party</a></li>
            <li class="six"><a href="#">Toys & Entertainment</a></li>
            <li class="seven"><a href="#">Art & Collectibles</a></li>
            <li class="eight"><a href="#">Craft Supplies</a></li>
            <li class="nine"><a href="#">Gifts & Gift Cards</a></li>
            <hr />
          </ul>


        </div>

      </div>

    </div>
  );
}

export default App;

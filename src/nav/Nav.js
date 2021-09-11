/* eslint-disable jsx-a11y/anchor-is-valid */
import './Nav.css';
import logo from '../images/logo.svg'
import searchlogoblack from '../images/searchblack.svg'
import searchlogowhite from '../images/searchwhite.svg'
import cart from '../images/cart.svg'
import DropdownItem from './dropdownitem'
import cancelicon from '../images/cancelicon.svg'
import { useState } from 'react';
function App() {
  const [hoversearch, sethoversearch] = useState(false)
  const [currentItem, setcurrentItem] = useState(false)
  function searchbarmousenter(){
    sethoversearch(true);
    setcurrentItem(false)
  }
  return (
    <div className="outside"  onMouseLeave={() => setcurrentItem(false)}>
       <div className="na" >
      <div className='navbar'>
        <div className='above'>
          <img src={logo} width='80px' alt='etsy logo' />
          <div className='searchbar' onMouseEnter={() => searchbarmousenter()}  onMouseLeave={() => sethoversearch(false)}>
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
            <a href="#" className='li first' >Halloween Shop</a>
            <a href="#" className='li' onMouseEnter={() => setcurrentItem('Jewelry & Accessories')} >Jewelry & Accessories</a>
            <a href="#" className='li' onMouseEnter={() => setcurrentItem('Clothing & Shoes')} >Clothing & Shoes</a>
            <a href="#" className='li' onMouseEnter={() => setcurrentItem('Home & Living')} >Home & Living</a>
            <a href="#" className='li' onMouseEnter={() => setcurrentItem('Wedding & Party')}>Wedding & Party</a>
            <a href="#" className='li' onMouseEnter={() => setcurrentItem('Jewelry & Accessories')} >Toys & Entertainment</a>
            <a href="#" className='li' onMouseEnter={() => setcurrentItem('Jewelry & Accessories')}>Art & Collectibles</a>
            <a href="#" className='li' onMouseEnter={() => setcurrentItem('Jewelry & Accessories')}>Craft Supplies</a>
            <a href="#" className='li last' onMouseEnter={() => setcurrentItem('Jewelry & Accessories')}>Gifts & Gift Cards</a>
          </ul>
        </div>
      </div>
    </div>
    {true ? <div className='dropdown-content' onMouseEnter={() => setcurrentItem(currentItem)}><DropdownItem name={'Jewelry & Accessories'} /></div> : null}
    </div>
   
  );
}

export default App;

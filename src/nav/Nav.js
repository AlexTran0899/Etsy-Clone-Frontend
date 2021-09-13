/* eslint-disable jsx-a11y/anchor-is-valid */
import './Nav.css';
import logo from '../images/logo.svg'
import searchlogoblack from '../images/searchblack.svg'
import searchlogowhite from '../images/searchwhite.svg'
import cart from '../images/cart.svg'
import DropdownItem from './dropdownitem'
import cancelicon from '../images/cancelicon.svg'
import { useEffect, useState } from 'react';
import axios from 'axios'
const api = process.env.REACT_APP_API_URL

function App() {
  const [hoversearch, sethoversearch] = useState(false)
  const [currentItem, setcurrentItem] = useState(false)
  function searchbarmousenter() {
    sethoversearch(true);
    setcurrentItem(false)
  }

  useEffect(() => {
    axios.get(`${api}/api/catagory`)
      .then(data => window.localStorage.setItem("data", JSON.stringify(data.data)))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="outside" onMouseLeave={() => setcurrentItem(false)}>
      <div className="na" >
        <div className='navbar'>
          <div className='above'>
            <img src={logo} width='80px' alt='etsy logo' />
            <div className='searchbar' onMouseEnter={() => searchbarmousenter()} onMouseLeave={() => sethoversearch(false)}>
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
              <a href="#" className='li' onMouseEnter={() => setcurrentItem(0)} >Jewelry & Accessories</a>
              <a href="#" className='li' onMouseEnter={() => setcurrentItem(1)} >Clothing & Shoes</a>
              <a href="#" className='li' onMouseEnter={() => setcurrentItem(2)} >Home & Living</a>
              <a href="#" className='li' onMouseEnter={() => setcurrentItem(3)}>Wedding & Party</a>
              <a href="#" className='li' onMouseEnter={() => setcurrentItem(4)} >Toys & Entertainment</a>
              <a href="#" className='li' onMouseEnter={() => setcurrentItem(5)}>Art & Collectibles</a>
              <a href="#" className='li' onMouseEnter={() => setcurrentItem(6)}>Craft Supplies</a>
              <a href="#" className='li last' onMouseEnter={() => setcurrentItem(7)}>Gifts & Gift Cards</a>
            </ul>
          </div>
        </div>
      </div>
      {currentItem !== false ? <div className='dropdown-content' onMouseEnter={() => setcurrentItem(currentItem)}><DropdownItem id={currentItem} /></div> : null}
    </div>

  );
}

export default App;

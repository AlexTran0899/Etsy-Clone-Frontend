import './App.css';
import logo from './images/logo.svg'
import searchlogo from './images/search.svg'
import cancelicon from './images/cancelicon.svg'
function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <div className='above'>
          <img src={logo} width='80px' alt='etsy logo' />
          <div className='searchbar'>
            <input className='searchfield'></input>
            <img src={cancelicon} alt='searchlogo' className='cancelicon' />
            <img src={searchlogo} alt='searchlogo' className='searchbutton' />
          </div>
        </div>
        <div className='below'>

        </div>

      </div>

    </div>
  );
}

export default App;

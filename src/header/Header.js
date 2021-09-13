/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.css';
import PopularGifts from './PopularGifts'

function App() {
let data = JSON.parse(window.localStorage.getItem('data'))

  return (
    <div className="header">
      <h1>Prep for fall with unique picks.</h1>
      <div className='item'>
        {data?.[8]?.map(each => 
          <div className='outsidebox'> <div className='insideBox'> <img src={each?.uniquePicksimageUrl} className='circle' alt='imagecircle' /> </div><p>{each?.uniquePicksName}</p> </div>
        )}
      </div>
      <PopularGifts/>
    </div>
  );
}

export default App;

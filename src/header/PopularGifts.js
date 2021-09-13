/* eslint-disable jsx-a11y/anchor-is-valid */
import './PopularGifts.css';
import { Rating } from 'react-simple-star-rating'
import { useEffect, useState } from 'react/cjs/react.development';


function App(props) {
  let storage = JSON.parse(window.localStorage.getItem('data'))
  const [data, setdata] = useState(storage)
  useEffect(() => {
    setdata(storage)
  }, [props.loaded])

  return (
    <div className="PopularGifts">
      <h1>Popular gifts right now</h1>
      <div className='PopularGiftsItems'>
        {data?.[9]?.map(each =>
          <div className='PopularGiftsItemEach'>
            <img src={each?.popularGifts_imageUrl} alt='populargiftimage' />
            <h1>{each?.popularGifts_Name}</h1>
            <div className='rating'>
              <Rating ratingValue={each?.store_star} fillColor='black' size='15px' />
              <p>({each?.store_rating})</p>
            </div>
            <h2>${(each?.popularGifts_price / 100).toFixed(2)}</h2>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;

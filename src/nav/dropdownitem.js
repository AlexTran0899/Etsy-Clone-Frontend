import './dropdown.css'
import { useEffect, useState } from 'react';
import rightarrow from '../images/rightarrow.svg'
import rightarrowwithtail from '../images/rightarrowwithtail.svg'

const data = JSON.parse(window.localStorage.getItem('data'))

function App(props) {
  const catagory = (data[props.id])
  const [currentSelect, setCurrentSelect] = useState(catagory.subCatagories[0].sub)
  useEffect(()=>{
    setCurrentSelect(catagory.subCatagories[0].sub)
  }, [catagory])
  return (
    <div className="dropdown">
      <div className='firstcol'>
        {catagory.subCatagories.map(each => 
          <div className='each' onMouseEnter={()=> setCurrentSelect(each.sub)}>
            <a>{each.subCategory}</a>
            <img src={rightarrow} alt='right arrow' />
          </div>
        )}
        <div className='h1 foot'>
          <a href='https://jsfiddle.net/5cLf6gck/'>All {catagory.category_name}</a>
          <img src={rightarrowwithtail} height='12px' alt='rigtharrowwithtail' />
        </div>
      </div>
      <div className='second'>
        {currentSelect?.map(subcata => 
          <div className='eachSecond'>
            <a href='notcurrent'>{subcata.subCategoryItem}</a>
          </div>
        )}
      </div>
      <div className='third'>
        <div className='imagebox'>
        <img src={catagory.editorpickImg} height='220' width='300' alt='editorpickimage' />
        <p>Editor Pick's</p>
        <h1>{catagory.editorpickimgTitle}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;

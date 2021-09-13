import Nav from './nav/Nav'
import Header from './header/Header'

import axios from 'axios'
const api = process.env.REACT_APP_API_URL
import { useEffect, useState } from 'react';




function App() {
  useEffect(() => {
    axios.get(`${api}/api/catagory`)
      .then(data => window.localStorage.setItem("data", JSON.stringify(data.data)))
      .catch(err => console.log(err))
  }, [])
  if (window.localStorage.getItem("data")){
    return (
      <div>
        <Nav/>
        <Header/>
  
      </div>
    );
  }

}

export default App;

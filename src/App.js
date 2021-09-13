import Nav from './nav/Nav'
import Header from './header/Header'
import axios from 'axios'
import { useState } from 'react/cjs/react.development'
const api = process.env.REACT_APP_API_URL

function App() {
  const [loaded,setloaded] = useState(false)
  axios.get(`${api}/api/catagory`)
    .then(data => window.localStorage.setItem("data", JSON.stringify(data.data)))
    .then(()=> setloaded(true) )
    .catch(err => console.log(err))
  return (
      <div>
      <Nav loaded={loaded}/>
      <Header loaded={loaded}/>
    </div> 
   )
}


export default App;

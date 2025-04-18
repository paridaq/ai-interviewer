

import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './home/Home'
import NavBar from './Nav/NavBar'

function App() {


  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        

      </Routes>
    </>
  )
}

export default App



import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './home/Home'
import NavBar from './Nav/NavBar'
import Footer from './footer/Footer'

function App() {


  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        

      </Routes>
      <Footer/>
    </>
  )
}

export default App

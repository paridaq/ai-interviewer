

import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './home/Home'
import NavBar from './Nav/NavBar'
import Footer from './footer/Footer'
import Pricing from './Pricingpage/Pricing'
import Departments from './questionbank/Departments'


function App() {


  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/departments' element={<Departments/>}/>
        
        

      </Routes>
      <Footer/>
    </>
  )
}

export default App

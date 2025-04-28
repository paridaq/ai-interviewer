

import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './home/Home'
import NavBar from './Nav/NavBar'
import Footer from './footer/Footer'
import Pricing from './Pricingpage/Pricing'
import Departments from './questionbank/Departments'
import MockChat from './mock/MockChat'
import LogIn from './auth/LogIn'
import Register from './auth/Register'


function App() {


  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/signin' element={<LogIn/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/resources' element={<Departments/>}/>
        <Route path='/ai-mock-interview' element={<MockChat/>}/>
        
        

      </Routes>
      <Footer/>
    </>
  )
}

export default App


import './App.css'
import 'aos/dist/aos.css';
import { Body } from './components/body'
import { History } from './pages/History'
import { Home } from './pages/Home'
import { Landing } from './pages/landing'
import {Route,Routes} from 'react-router-dom'

import { useEffect } from 'react';
import Aos from 'aos';


function App() {

useEffect(()=>{
  Aos.init({
    duration:1000,
    once:false
  })
},[])



  return (
    <>

    <Routes>
      <Route path='/' element={<Body/>} >
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/history' element={<History/>}/>
      </Route>
    </Routes>
      
       
    </>
  )
}

export default App

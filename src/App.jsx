
import './App.css'
import 'aos/dist/aos.css';
import { Body } from './components/Body'
import { History } from './pages/History'
import { Home } from './pages/Home'
import { Landing } from './pages/Landing'
import {Route,Routes} from 'react-router-dom'
import { useEffect } from 'react';
import Aos from 'aos';
import { ToastContainer, toast } from 'react-toastify';



function App() {

useEffect(()=>{
  Aos.init({
    duration:1000,
    once:false
  })
},[])



  return (
    <>

    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    
    />
    
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

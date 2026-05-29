import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import CreateBlog from './pages/CreateBlog'
import EditBlog from './pages/EditBlog'
import Profile from './pages/Profile'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'


const App=()=>{
  const [dark,setDark] = useState(false)
  return(
    <div style={{background:dark?'#121212':'white',color:dark?'white':'black',minHeight:'100vh',padding:'20px'}}>
      <div style={{position:'fixed',top:'20px',right:'20px',zIndex:'1000'}}>
        <button onClick={()=>setDark(!dark)}>{dark ? '☀️ Light' : '🌙 Dark'}</button></div>
    <BrowserRouter>
    <Routes>
     <Route path='/login' element={<Login/>}/>
     <Route path='/' element={<Signup/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path='/createblog' element={<CreateBlog/>}/>
     <Route path='/edit/:id' element={<EditBlog/>}/>
     <Route path='/profile' element={<Profile/>}/>
    </Routes>
    <ToastContainer/>
    </BrowserRouter>
    
  </div>
  )
}

export default App;
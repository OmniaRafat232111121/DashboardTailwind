import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import { useEffect} from 'react'
import { useSelector } from 'react-redux'

function App() {
const isAuth = useSelector(state => state?.authSlice?.user?.isAuth)
  return (
    <>
      <Router>
         
        <div className='container'>
          <Header />
        
       <Hom
          <Routes>
            
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
              
      
          </Routes>
        </div>
      </Router>
      <ToastContainer />




      
    </>
  )
}

export default App

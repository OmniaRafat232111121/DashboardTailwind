
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import logo from '../logo.png'
function Header() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/login");
    console.log('Jjjdjdjj')
  

  }



  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>
          <img src={logo } cl />
        </Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className='btn' onClick={()=>onLogout()}>
             <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header

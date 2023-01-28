
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
          <img src={logo } className="w-20" />
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
              <Link  className="Button" to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link  className="Button" to='/register'>
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
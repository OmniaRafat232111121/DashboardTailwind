import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { useFormik } from 'formik'
import { LoginSchema } from '../utils/Validation'
function Login() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
  handleSubmit,
    handleBlur,
    handleChange,
   }= useFormik({
    initialValues: {
      email: '',
      password:''
    },
     validationSchema: LoginSchema
    
  })
  

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess ) {

      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }))
  // }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }
    console.log(userData)

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading '>
        <h1>
          Login
        </h1>
        <p>Login and start watched Dashboard</p>
      </section>

      <section className='form  p-10 rounded-md mt-10'>
        <form onSubmit={onSubmit}>
          <formik
        </form>


        
      </section>
    </>
  )
}

export default Login

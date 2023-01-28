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
          <div className='form-group'>
            <input
              type='email'
              className='form-control outline-none'
              id='email'
              name='email'
              value={values.email}
              placeholder='Enter your email'
              onChange={handleChange}
              onBlur={handleBlur}
              className=`{
          errors.email && touched.email ? "input-error" : ""
        }
             
            />
            {errors.email && touched.email && <p className="text-red-500 font-semibold">{errors.email}</p>}
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control outline-none'
              id='password'
              name='password'
              value={values.password}
              placeholder='Enter password'
              onChange={handleChange}
               onBlur={handleBlur}
            />
             {errors.email && touched.email && <p className="text-red-500 font-semibold ">{errors.email}</p>}
          </div>

          <div className='form-group'>
            <button type='submit' disabled={isSubmitting} className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>


        
      </section>
    </>
  )
}

export default Login

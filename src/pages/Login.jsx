import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Login.css'
import  { useAuthContext }  from '../services/AuthContext'

const Login = () => {
  const { signIn } = useAuthContext();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')
  const emailRef = useRef()
  const passwordRef = useRef()
  
  const handlelogin = async (e) =>{
    e.preventDefault()
            try {
                  setLoading(true)
                  await signIn(emailRef.current.value, passwordRef.current.value)
            } catch (error) {
                  setError('Failed to sign in ')
            }
            setLoading(false)
  }
  return (
    <div className='app_signIn_card-container'>
      {/* {error && <Alert variant="danger">{error}</Alert>} */}
      <div className='app_signIn_card-inputs'>
          <label htmlFor="email">Email: </label>
          <br/>
          <input type="email" name="email" id="email" ref={emailRef}  required/><br/>
          <label htmlFor="password">Password: </label><br/>
          <input type="password" name="password" id="password" ref={passwordRef}  required />
      </div>
      <div className='app_signIn_card-btn-container'>
        <button type='submit'
          onClick={(e) =>{handlelogin(e)}}>Log In</button>
      </div>
      <p>Not yet a user ? <a><Link to={'/register'}>Register here!</Link></a></p>
    </div>
  )
}

export default Login
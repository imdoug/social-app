import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const handlelogin = () =>{
    console.log('Mooo Moooo')
  }
  return (
    <div className='app_signIn_card-container'>
      <div className='app_signIn_card-inputs'>
          <label htmlFor="name">Full Name: </label>
          <br/>
          <input type="password" name="name" id="name" />
          <label htmlFor="email">Email: </label>
          <br/>
          <input type="email" name="" id="" />
          <br/>
          <label htmlFor="password">Password: </label>
          <br/>
          <input type="password" name="new-password" id="new-password" />
          <br/>
          <label htmlFor="conf-password">Password Confirmation: </label>
          <br/>
          <input type="password" name="conf-password" id="conf-password" />
      </div>
      <div className='app_signIn_card-btn-container'>
        <button type='button'
        onClick={handlelogin}>Register</button>
      </div>
      <p>Already a user ? <a> <Link to={'/login'}>Login here!</Link></a></p>
    </div>
  )
}

export default Register
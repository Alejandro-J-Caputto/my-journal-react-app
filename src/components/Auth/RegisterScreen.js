import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Login</h3>
        <form>
          <input 
            type="text"
            placeholder="Name"
            name="Name"
            className="auth__input"
            autoComplete="off"
          />
          <input 
            type="email"
            placeholder="Email"
            name="email"
            className="auth__input"
            autoComplete="off"
          />
          <input 
            type="pasword"
            placeholder="Password"
            name="password"
            className="auth__input"
            autoComplete="off"
          />
          <input 
            type="pasword"
            placeholder="Confirm password"
            name="password2"
            className="auth__input"
            autoComplete="off"
          />
          <button className="btn btn-primary btn-block mt-1" type="submit" >
            Register 
          </button>
        
          
          <Link className="link link-login mt-5" to="/auth/login"> Already registered? </Link>
        </form>

    </>
  )
}

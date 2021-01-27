import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { startGoogleLogin, startLoginEmailPassword } from '../../reducers/actions/authActions'

export const LoginScreen = () => {


  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.ui)

  const [formValues, handleInputChange, reset] = useForm({
    email: '',
    password: ''
  });
  const {email, password} = formValues
  
  const handleLogin = (e) => {
    e.preventDefault();


    
    dispatch(startLoginEmailPassword(email, password))
  }
  const handleGoogleLogin = () => {
    dispatch( startGoogleLogin())
  }
  // const handleLoginWithEmailAndPassword = () => {
  //   dispatch(startLoginEmailPassword(email, password))
  // }

  return (
    <>
      <h3 className="auth__title">Login</h3>
        <form className="animate__animated animate__fadeIn" onSubmit={handleLogin}>
          <input 
            type="text"
            placeholder="Email"
            name="email"
            className="auth__input"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />

          <input 
            type="password"
            placeholder="Password"
            name="password"
            className="auth__input"
            autoComplete="off"
            value={password}
            onChange={handleInputChange}
          />
          
          <button disabled={loading}  className="btn btn-primary btn-block" type="submit" >
            Login 
          </button>
        
          <div className="auth__social">
            <p>Login with social networks</p>
            <div className="google-btn" onClick={handleGoogleLogin}>
              <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
              </div>
              <p className="btn-text">
                  <b>Sign in with google</b>
              </p>
            </div>
          </div>
          <Link className="link link-login" to="/auth/register">Create an Account</Link>
        </form>

    </>
  )
}

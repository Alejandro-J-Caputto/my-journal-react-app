import React from 'react'
import validator from 'validator'
import {useDispatch, useSelector} from 'react-redux'

import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import {setErrorAction, removeErrorAction, confirmRegistration} from '../../reducers/actions/ui'
import { startRegisterWithEmailPasswordName } from '../../reducers/actions/authActions'

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const {msgError, msgSuccess} = useSelector(state => state.ui);
  


  const [formValues, handleInputChange] = useForm({
    name: 'Alejandro',
    email: 'jandro@gmail.com',
    password: '123456',
    password2: '123456'
  })

  const {name, email, password, password2} = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(name, email, password, password2)
    if(isFormValid()){
      dispatch(startRegisterWithEmailPasswordName(email, password, name))
    }  

  }

  const isFormValid = () => {
    
    if(name.trim().length <= 0) {
      dispatch(setErrorAction('A name is required'))

      return false;
    } 
    if ( !validator.isEmail(email)) {
      dispatch(setErrorAction('the email is not valid'))
      return false;
    } 

    if( password !== password2) {
      dispatch(setErrorAction('Password should be at least 6 characters long and match each other'))
      return false
    }
    dispatch(removeErrorAction())
    dispatch(confirmRegistration('User Registered succesfully'))
    return true;
  }

  return (
    <>
      <h3 className="auth__title">Login</h3>
        <form onSubmit={handleRegister}>
          {
            msgError &&
            (<div className="auth__alert-error">{msgError}</div>)}
          <input 
            onChange={handleInputChange}
            value={name}
            type="text"
            placeholder="Name"
            name="name"
            className="auth__input"
            autoComplete="off"
          />
          <input 
            onChange={handleInputChange}
            value={email}

            type="email"
            placeholder="Email"
            name="email"
            className="auth__input"
            autoComplete="off"
          />
          <input 
            onChange={handleInputChange}
            value={password}

            type="pasword"
            placeholder="Password"
            name="password"
            className="auth__input"
            autoComplete="off"
          />
          <input 
            onChange={handleInputChange}
            value={password2}

            type="pasword"
            placeholder="Confirm password"
            name="password2"
            className="auth__input"
            autoComplete="off"
          />
          {msgSuccess && <div className="auth__alert-success">{msgSuccess}</div>}
          <button className="btn btn-primary btn-block mt-1" type="submit" >
            Register 
          </button>
        
          
          <Link className="link link-login mt-5" to="/auth/login"> Already registered? </Link>
        </form>

    </>
  )
}

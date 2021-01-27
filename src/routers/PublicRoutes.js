import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PublicRoutes = ({isLoggedIn, component: Component, ...rest}) => {
  console.log(isLoggedIn)
  return (

    <Route {...rest}
    component={ (props) => (
      (isLoggedIn )
        ? ( <Redirect to="/" />)
        : (<Component {...props} />)
    )}
    />
  )
}

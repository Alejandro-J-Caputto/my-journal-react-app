import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import {firebase} from '../firebase/firebaseConfig'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../reducers/actions/authActions';
export const AppRouter = () => {


  const [checkData, setCheckData] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user?.uid) {
        dispatch(login(user.uid, user.displayName))
        setCheckData(false)
        setIsLoggedIn(true)
      }
    });
  }, [dispatch, setCheckData, setIsLoggedIn])
  if(checkData){
    return <h1>Wait...</h1>
  }
  return (
   <Router>
     <div>
       <Switch>
         <Route path="/auth" component={AuthRouter} />
         <Route exact path="/"  component={JournalScreen} />
         <Redirect to="/auth/login"/>
       </Switch>
     </div>
   </Router>
  )
}

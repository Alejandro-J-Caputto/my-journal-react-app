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
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes } from '../reducers/actions/notes';
export const AppRouter = () => {


  const [checkData, setCheckData] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if(user?.uid) {
        dispatch(login(user.uid, user.displayName))
        setIsLoggedIn(true)
        const notes =  await loadNotes(user.uid)
        dispatch(setNotes(notes));
      } else {
        setIsLoggedIn(false)
        
      }
      setCheckData(false)
    });
  }, [dispatch, setCheckData, setIsLoggedIn])
  
  if(checkData){
    return <h1>Wait...</h1>
  }
  return (
   <Router>
     <div>
       <Switch>
         <PublicRoutes isLoggedIn={isLoggedIn} path="/auth" component={AuthRouter} />
         {/* <Route path="/auth" component={AuthRouter} /> */}
         <PrivateRoutes isLoggedIn={isLoggedIn} exact path="/" component={JournalScreen} />
         {/* <Route exact path="/"  component={JournalScreen} /> */}
         <Redirect to="/auth/login"/>
       </Switch>
     </div>
   </Router>
  )
}

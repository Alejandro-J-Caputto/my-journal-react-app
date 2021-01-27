import { types } from "../actionTypes/types";
import {firebase, GoogleAuthProvider } from '../../firebase/firebaseConfig'
import { uiFinishLoading, uiStartLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(uiStartLoading())
    setTimeout(() => {
          firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user}) => {
              dispatch(login(user.uid, user.displayName))
              dispatch(uiFinishLoading());
            })
            .catch(e => { 
              console.log(e)
              dispatch(uiFinishLoading());
            })

        }, 3500);

  }
}

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup( GoogleAuthProvider )
      .then(({user}) => {
        dispatch(login(user.uid, user.displayName))
      })
  }
}


export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async ({user}) => {
        await user.updateProfile({displayName: name});
        console.log(user);
        dispatch(login(user.uid, user.displayName))
      }).catch( e => {
        console.log(e)
      })
  }
}

export const login = (uid, displayName) => {
  console.log('patata')
  console.log(uid, displayName)
  return {
    type: types.login,
    payload: {
      uid,
      displayName
    }
  }

}



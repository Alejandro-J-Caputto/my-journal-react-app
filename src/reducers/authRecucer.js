import { types } from "./actionTypes/types";

/*
 El state por defecto vacio se encuentra en este estado
 cuando no hay nadie logeado. 
 {
   uid: '12319231'
   name: 'Alejandro'
 }
 ------------------

*/
export const authReducer = (state = {}, action) => {

  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName
      }
    case types.logout:
      return {}  
    

    default:
      return state;
    }
  
}
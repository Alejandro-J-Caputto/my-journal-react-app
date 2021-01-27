import { types } from "./actionTypes/types";

const initialState = {
  loading: false, 
  msgError: null,
  msgSuccess: null
}


export const uiReducer = (state=initialState, action) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        msgSuccess: false,
        msgError: action.payload
      }
    case types.uiRemoveError:
      return {
        state,
        msgError: null
      } 
    case types.uiSuccess:
      return {
        state,
        msgSuccess: action.payload
      }   
    case types.uiStartLoading:
      return {
        ...state,
        loading: true
      }   
    case types.uiFinishLoading:
      return {
        ...state,
        loading: false
      }   

  
    default:
      return state;
  }
}
import { types } from "../actionTypes/types"


export const setErrorAction = (err) => ({
  type: types.uiSetError,
  payload: err
})
export const removeErrorAction = (err) => ({
  type: types.uiRemoveError,

})
export const confirmRegistration = (msg) => ({
  type: types.uiSuccess,
  payload: msg
})

export const uiStartLoading = () => ({
  type: types.uiStartLoading
})
export const uiFinishLoading = () => ({
  type: types.uiFinishLoading
})
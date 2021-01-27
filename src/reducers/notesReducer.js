import { types } from "./actionTypes/types";

/*
{
  notes: [],
  active: null,
  active: {
    id:'likausehriuwhseo',
    title: '',
    body: '',
    imageUrl: '',
    date: 123123124124
  }
}
*/
const initialState = {
  notes: [],
  active: null
}
export const notesReducer = (state= initialState, action) => {
  switch (action.type) {
    case types.notesActive: 
      return {
        ...state,
        active: {
          ...action.payload
        }
      }
    case types.notesAddNew: 
      return {
        ...state,
        notes: [action.payload, ...state.notes]
      }
    case types.notesGet:
      return {
        ...state,
        notes: [ ...action.payload]
      }
    case types.notesUpdate: 
      return {
        ...state,
        notes: state.notes.map(
          note => note.id === action.payload.id
            ? action.payload.note
            : note
        )
      }
    case types.notesCleanOnLogout:
      return {
        ...state,
        active: null,
        notes: []
      }
    default:
      return state;
  }
}
import { db } from "../../firebase/firebaseConfig"
import { types } from "../actionTypes/types"
import Swal from 'sweetalert2'
import { fileUpload } from "../../helpers/fileUpload"

export const startNewNote = () => {
  return async (dispatch, getState) => {

    const uid = getState().auth.uid

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }

    const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
    console.log(docRef);

    dispatch(activeNote(docRef.id, newNote));
    dispatch(addNewNoteSidebar(docRef.id, newNote));
    // dispatch(startSaveNote(newNote))
  }
}

export const addNewNoteSidebar = (id, note) => ({
  type: types.notesAddNew,
  payload: {
    id, ...note
  }
})

export const activeNote = (id, note) =>( {

  type: types.notesActive,
  payload: {
    id,
    ...note
  }

})

export const setNotes = (notes) => ({
  type: types.notesGet,
  payload: notes
})

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid
    console.log(uid)
    if(!note.url) {
      delete note.url
    }
    const noteFire = {...note};
    delete noteFire.id;
    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteFire);
    dispatch(refreshNotes(note.id, noteFire));
    Swal.fire('Saved', note.title, 'success')
  }
}

export const refreshNotes = (id, note) => ({
  type: types.notesUpdate,
  payload: {
    id,
    note : {
      id,
      ...note
    }
  }
})

export const startUploading = (file) => {
  return async (dispatch, getState) => {
    const {active:activeNote} = getState().notes;
    

    Swal.fire({
      title: 'Uploading..',
      text: 'Please wait...',
      onBeforeOpen: ()=> {
        Swal.showLoading();
      },
      allowOutsideClick: false,
    })

    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl

    dispatch(startSaveNote(activeNote))
    Swal.close();
  }
}

export const noteLogOut =() => ({
  type: types.notesCleanOnLogout
}) 
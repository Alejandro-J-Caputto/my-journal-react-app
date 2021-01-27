import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { activeNote } from '../../reducers/actions/notes'
import { NotesAppBar } from './notesComponents/NotesAppBar'

export const NotesScreen = () => {


  const dispatch = useDispatch()
  const {active:note} = useSelector(state => state.notes); 
  console.log(note)

  
  const [formValues, handleInputChange, reset] = useForm(note);

  const activeId = useRef(note.id);

  useEffect(() => {
    if(note.id !== activeId.current) {
      reset(note)
      activeId.current = note.id
    }
    
  }, [note, reset])


  useEffect(() => {
    dispatch(activeNote(formValues.id, {...formValues}))
  }, [formValues])

  const {body, title} = formValues
  return (
    <div className="notes__main animate__animated animate__fadeIn">
      <NotesAppBar />
      <div className="notes__content">
        <form className="notes__form">
          <input
            onChange={handleInputChange}
            className="notes__input-title"
            placeholder="Some amazing title"
            type="text"
            name="title"
            autoComplete="off"
            value={title}
          />
          <textarea
            onChange={handleInputChange}
            autoComplete="off"
            name="body"
            className="notes__textarea"  
            placeholder="What's up to??"
            value={body}
          ></textarea>
          {
            (note.url) &&
            <div className="notes__image animate__animated animate__fadeIn">
            <img alt="landscape Major" className="animate__animated animate__fadeIn" src={note.url}></img>
          </div>}
        </form>
      </div>
    </div>
  )
}

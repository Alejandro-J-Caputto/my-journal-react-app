import React from 'react'
import { NotesAppBar } from './notesComponents/NotesAppBar'

export const NotesScreen = () => {
  return (
    <div className="notes__main">
      <NotesAppBar />
      <div className="notes__content">
        <form className="notes__form">
          <input
            className="notes__input-title"
            placeholder="Some amazing title"
            type="text"
            name="title"
            autoComplete="off"
          />
          <textarea
            autoComplete="off"
            className="notes__textarea"  
            placeholder="What's up to??"
          ></textarea>
          <div className="notes__image">
            <img alt="landscape Major" src="./assets/major-mira-killian.jpg"></img>
          </div>
        </form>
      </div>
    </div>
  )
}

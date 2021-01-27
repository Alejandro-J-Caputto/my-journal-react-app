import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { JournalEntrie } from './JournalEntrie';

export const JournalEntries = () => {


const {notes} = useSelector(state => state.notes)


  return (
    <div className="journal__entries animate__animated animate__fadeIn">
      {
        notes.map(note => {
          return <JournalEntrie
          {...note}
          key={note.id} />
        })
      }
    </div>
  )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NotesScreen } from '../notes/NotesScreen'
import { DefaultView } from './DefaultView'
import { Sidebar } from './journalComponents/Sidebar'

export const JournalScreen = () => {

  const {active} = useSelector(state => state.notes);



  return (
    <div className="journal__main-content animate__animated animate__fadeIn">
      <Sidebar />

      <main className="main">
        {
          (active)
            ? (<NotesScreen />)
            : (<DefaultView />)
        }
        {/* <DefaultView /> */}
        {/* <NotesScreen /> */}
      </main>
    </div>
  )
}

import React from 'react'
import { NotesScreen } from '../notes/NotesScreen'
import { DefaultView } from './DefaultView'
import { Sidebar } from './journalComponents/Sidebar'

export const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />

      <main className="main">
        {/* <DefaultView /> */}
        <NotesScreen />
      </main>
    </div>
  )
}

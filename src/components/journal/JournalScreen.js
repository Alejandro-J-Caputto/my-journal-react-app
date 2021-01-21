import React from 'react'
import { DefaultView } from './DefaultView'
import { Sidebar } from './journalComponents/Sidebar'

export const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />

      <main className="main">
        <DefaultView />
      </main>
    </div>
  )
}

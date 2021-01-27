import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogOut } from '../../../reducers/actions/authActions'
import { startNewNote } from '../../../reducers/actions/notes'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

  const dispatch = useDispatch()
  const {name} = useSelector(state => state.auth)

  const handleLogout = () => {
    dispatch(startLogOut())
  }

  const handleAddNew = () => {
    dispatch(startNewNote())
  }
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5 logoo">
          <i className="far fa-moon" />
          <span>  {name}</span>
        </h3>
        <button
        onClick={handleLogout}
        className="btn">
          Logout
        </button>
      </div>
      <div onClick={handleAddNew} className="journal__new-entry ">
        <i className=" far fa-calendar-plus fa-5x"></i>
        <p>
          New Entry
        </p>
      </div>
      <JournalEntries />
    </aside>
  )
}

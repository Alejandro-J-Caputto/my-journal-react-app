import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogOut } from '../../../reducers/actions/authActions'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(startLogOut())
  }

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5 logoo">
          <i className="far fa-moon" />
          <span>  Alejandro Caputto</span>
        </h3>
        <button
        onClick={handleLogout}
        className="btn">
          Logout
        </button>
      </div>
      <div className="journal__new-entry ">
        <i className=" far fa-calendar-plus fa-5x"></i>
        <p>
          New Entry
        </p>
      </div>
      <JournalEntries />
    </aside>
  )
}

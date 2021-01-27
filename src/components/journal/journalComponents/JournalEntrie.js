import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { activeNote } from '../../../reducers/actions/notes';
export const JournalEntrie = ({id, date, title, body, url}) => {
  const dispatch = useDispatch()
  const dateMoment = moment(date);

  const handleEntryClick = () => {
    dispatch(activeNote(id, {
      date, title, body, url
    }))
  }
  return (
    <div onClick={handleEntryClick} className="journal__entrie animate__animated animate__fadeIn">
     { url && <div className="journal__entrie-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${url})`
        }}> 
        </div>}
        <div className = "journal__entrie-body">
          <p className="journal__entrie-title"> {title} </p>
          <p className="journal__entrie-content">
             {body}
          </p>

        </div>
        <div className="journal__entrie-date">
          <span>{dateMoment.format('dddd')}</span>
          <h4>{dateMoment.format('Do')}</h4>
        </div>
    </div>
  )
}

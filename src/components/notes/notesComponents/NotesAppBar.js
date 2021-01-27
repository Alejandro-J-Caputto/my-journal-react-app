import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote, startSaveNote, startUploading } from '../../../reducers/actions/notes';

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const {active} = useSelector(state => state.notes)
  const handleSave = () => {
    console.log(active)
    dispatch(startSaveNote(active))
  }
  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    if(file) {
      dispatch(startUploading(file))
    }
  }
  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click();

  }
  return (
    <div className="notes__appBar">
      <span> 17 Enero 2021 </span>
      <input
      id="fileSelector"
      type="file"
      style={{display: 'none'}}
      onChange={handlePictureUpload}
      ></input>
      <div>
        <button onClick={handlePictureClick} className="btn">
          Picture
        </button>
        <button
          onClick={handleSave}
          className="btn">
          Save Note
        </button>
      </div>
    </div>
  )
}

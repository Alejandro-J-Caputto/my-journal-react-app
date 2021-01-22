import React from 'react'

export const JournalEntrie = () => {
  return (
    <div className="journal__entrie">
      <div className="journal__entrie-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(./assets/major.png)'
        }}> 
        </div>
        <div className = "journal__entrie-body">
          <p className="journal__entrie-title"> A new Day </p>
          <p className="journal__entrie-content">
             Voluptate qui reprehenderit dolor in id cillum sunt ea pariatur. 
             </p>

        </div>
        <div className="journal__entrie-date">
          <span>Monday</span>
          <h4>2</h4>
        </div>
    </div>
  )
}

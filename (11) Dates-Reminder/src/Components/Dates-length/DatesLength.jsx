import React from 'react';


const DatesLength = ({ person }) => {
  return (
    <div className='dates-length mt-3 mb-3'>
      <h5 style={{margin: '0px'}}>You Have Today <span style={{color: 'red'}}>{person.length}</span> Meetings</h5>
    </div>
  )
}



export default DatesLength;
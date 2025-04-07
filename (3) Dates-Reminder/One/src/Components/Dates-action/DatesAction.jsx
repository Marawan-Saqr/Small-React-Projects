import React from 'react';

const DatesAction = ({ hideData, showData }) => {
  return (
    <div className='dates-action d-flex mt-2'>
      <button onClick={showData} className='btn btn-success' style={{marginRight: '5px'}}>Show All</button>
      <button onClick={hideData} className='btn btn-danger'>Hide All</button>
    </div>
  )
}



export default DatesAction;
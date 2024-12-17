import React from 'react';
import './DatesIcons.css';

const DatesIcons = ({ person }) => {
  return (
    <div className="box-container">
      <div className="box-data">
        {person.length > 0 ? (
          person.map((item) => (
            <div
              key={item.id}
              className="data-item d-flex"
              style={{ borderBottom: '1px solid black' }}
            >
              <img src={item.img} alt={item.name} />
              <div className="d-flex flex-column">
                <h6>{item.name}</h6>
                <p>{item.date}</p>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-center mt-3">No Dates Today</h2>
        )}
      </div>
    </div>
  );
};

export default DatesIcons;
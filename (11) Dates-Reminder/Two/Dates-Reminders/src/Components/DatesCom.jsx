import React from "react";

const DatesComp = ({ dates, showDates, hideDates }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {dates.length >= 1 ? (
          dates.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                width: "250px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
                textAlign: "center",
              }}
            >
              <h3 style={{ margin: "0 0 10px", color: "#333" }}>{item.name}</h3>
              <p style={{ margin: "0", color: "#777" }}>{item.date}</p>
            </div>
          ))
        ) : (
          <h2 style={{ color: "#555", textAlign: "center" }}>No Dates Today</h2>
        )}
      </div>
      <div className="text-center">
        <button onClick={showDates} className="btn btn-success me-2">Show Dates</button>
        <button onClick={hideDates} className="btn btn-danger">Hide Dates</button>
      </div>
    </div>
  );
};



export default DatesComp;
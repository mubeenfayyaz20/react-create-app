import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const AllEvents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getEventdata();
  }, []);

  const getEventdata = async () => {
    try {
      const getData = await fetch("http://localhost:3000/events");
      const jsonData = await getData.json();
      setData(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="allEvents">
      <div className="d-flex justify-content-between mb-3 align-items-center">
        <h1>List of Events</h1>
        <NavLink className="btn btn-primary" to="/add-new-events">
          Add New Event
        </NavLink>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Time Start</th>
              <th scope="col">Time End</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.weddingDecription}</td>
                  <td>{item.startTime}</td>
                  <td>{item.endTime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEvents;

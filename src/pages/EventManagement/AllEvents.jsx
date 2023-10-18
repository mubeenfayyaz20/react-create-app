import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getEventdata, eventDelete } from "../../api";
import map from "lodash/map";
import { format } from "date-fns";

const AllEvents = () => {
  const [data, setData] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getEventdata().then((res) => {
      setData(res);
    });
  };

  const update = (id) => {
    navigate("/update-event/" + id);
  };

  const deleteEvent = (id) => {
    const deleteData = eventDelete(id).then(() => {
      getData();
    });
    getData();
    if (deleteData) {
      alert("Event deleted successfully");
    } else {
      alert("Something went wrong");
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
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {map(data, (value, key) => {
              const formattedDate = format(
                new Date(value.startTime),
                "MM/dd/yyyy"
              );
              const formattedDateEnd = format(
                new Date(value.endTime),
                "MM/dd/yyyy"
              );
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{value.title}</td>
                  <td>{value.weddingDecription}</td>
                  <td>{formattedDate}</td>
                  <td>{formattedDateEnd}</td>
                  <td>
                    <span>
                      <button
                        onClick={() => update(value.id)}
                        className="btn btn-primary m-1 "
                      >
                        Update
                      </button>

                      <button
                        className="btn btn-danger m-1 "
                        onClick={() => {
                          deleteEvent(value.id);
                        }}
                      >
                        Delete
                      </button>
                      <button className="btn btn-success m-1 ">
                        Event Atend
                      </button>
                    </span>
                  </td>
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

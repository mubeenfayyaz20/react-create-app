import React, { useEffect, useState } from "react";
import { getEventDataID, eventUpdateData, getEventdata } from "../../api";
import { useParams, useNavigate } from "react-router-dom";

const AddNewEvents = () => {
  const [eventData, setEventData] = useState({});

  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSingalData = () => {
      try {
        getEventDataID(id).then((res) => {
          setEventData(res);
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchSingalData();
  }, [id]);

  const handleInputChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await eventUpdateData(id, {
        title: eventData.title,
        weddingDecription: eventData.weddingDecription,
        startTime: eventData.startTime,
        endTime: eventData.endTime,
      });
      getEventdata();

      navigate("/all-events/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="addNewEventForm">
      <h3 className="mb-3">Update Event</h3>
      <form>
        <div className="form-group mb-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={eventData.title}
            placeholder="Enter title"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group  mb-3">
          <label htmlFor="Description">Description</label>
          <input
            type="text"
            className="form-control"
            id="Description"
            name="weddingDecription"
            value={eventData.weddingDecription}
            onChange={handleInputChange}
            placeholder="Description"
          />
        </div>
        <div className="form-group  mb-3">
          <label htmlFor="start-time">Start Time</label>
          <input
            type="datetime-local"
            className="form-control"
            id="start-time"
            name="startTime"
            value={eventData.startTime}
            placeholder="Start time"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group  mb-3">
          <label htmlFor="end-time">End Time</label>
          <input
            type="datetime-local"
            className="form-control"
            value={eventData.endTime}
            id="end-time"
            name="endTime"
            placeholder="End Time"
            onChange={handleInputChange}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewEvents;

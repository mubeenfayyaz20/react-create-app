import React, { useEffect, useState } from "react";
import { getEventDataID, eventUpdateData, getEventdata } from "../../api";
import { useParams, useNavigate } from "react-router-dom";
import Textfield from "../../elements/Form/Textfield";

const AddNewEvents = () => {
  const [eventData, setEventData] = useState({});

  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();

  useEffect(() => {
    try {
      getEventDataID(id).then((res) => {
        setEventData(res);
      });
    } catch (err) {
      console.log(err);
    }
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
  // const formattedDate = format(new Date(eventData.startTime), "MM-dd-yyyy");

  // console.log(formattedDate);
  return (
    <div className="addNewEventForm">
      <h3 className="mb-3">Update Event</h3>
      <form>
        <div className="form-group mb-3">
          <Textfield
            label="Title"
            id="title"
            name="title"
            value={eventData.title}
            placeholder="Enter title"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group  mb-3">
          <Textfield
            label="Description"
            id="Description"
            name="weddingDecription"
            value={eventData.weddingDecription}
            placeholder="Enter Decription"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group  mb-3">
          <Textfield
            type="date"
            label="Start Time"
            id="start-time"
            name="startTime"
            value={eventData.startTime}
            placeholder="Start Time"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group  mb-3">
          <Textfield
            type="date"
            label="End Time"
            id="end-time"
            name="endTime"
            value={eventData.endTime}
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

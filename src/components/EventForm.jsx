import React, { useState } from "react";
import Textfield from "../elements/Form/Textfield";
const EventForm = ({ apiCall, ...reset }) => {
  const [title, setTitle] = useState("");
  const [weddingDecription, setWeddingDecription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postData = await apiCall({
        title: title,
        weddingDecription: weddingDecription,
        startTime: startTime,
        endTime: endTime,
      });

      if (postData) {
        alert("Event added successfully");
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }

    setTitle("");
    setWeddingDecription("");
    setStartTime("");
    setEndTime("");
  };

  return (
    <div className="genericForm">
      <form>
        <div className="form-group mb-3">
          <Textfield
            label="Title"
            id="title"
            name="title"
            value={title}
            placeholder="Enter title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-group  mb-3">
          <Textfield
            label="Description"
            id="Description"
            name="Description"
            value={weddingDecription}
            placeholder="Enter Description"
            onChange={(e) => {
              setWeddingDecription(e.target.value);
            }}
          />
        </div>
        <div className="form-group  mb-3">
          <Textfield
            type="date"
            label="Start Time"
            id="start-time"
            name="start-time"
            value={startTime}
            placeholder="Start time"
            onChange={(e) => {
              setStartTime(e.target.value);
            }}
          />
        </div>
        <div className="form-group  mb-3">
          <Textfield
            type="date"
            label="End Time"
            id="end-time"
            name="end-time"
            value={endTime}
            placeholder="End time"
            onChange={(e) => {
              setEndTime(e.target.value);
            }}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;

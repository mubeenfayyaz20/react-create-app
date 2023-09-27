import React, { useState } from "react";
import { eventPostData } from "../../api";

const AddNewEvents = () => {
  const [title, setTitle] = useState("");
  const [weddingDecription, setWeddingDecription] = useState("");
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDateTime = new Date();
    setStartTime(newDateTime);
    const newDateTimeEnd = new Date();
    setEndTime(newDateTimeEnd);
    try {
      const postData = await eventPostData({
        title: title,
        weddingDecription: weddingDecription,
        startTime: startTime,
        endTime: endTime,
      });

      console.log(postData);
      debugger;
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
    <div className="addNewEventForm">
      <h3 className="mb-3">Add Event</h3>
      <form>
        <div className="form-group mb-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            placeholder="Enter title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-group  mb-3">
          <label htmlFor="Description">Description</label>
          <input
            type="text"
            className="form-control"
            id="Description"
            value={weddingDecription}
            onChange={(e) => {
              setWeddingDecription(e.target.value);
            }}
            placeholder="Description"
          />
        </div>
        <div className="form-group  mb-3">
          <label htmlFor="start-time">Start Time</label>
          <input
            type="datetime-local"
            className="form-control"
            id="start-time"
            value={startTime}
            placeholder="Start time"
            onChange={(e) => {
              setStartTime(e.target.value);
            }}
          />
        </div>
        <div className="form-group  mb-3">
          <label htmlFor="end-time">End Time</label>
          <input
            type="datetime-local"
            className="form-control"
            value={endTime}
            id="end-time"
            placeholder="End Time"
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

export default AddNewEvents;

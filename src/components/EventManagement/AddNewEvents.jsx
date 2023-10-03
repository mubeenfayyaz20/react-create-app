import React, { useState } from "react";
import { eventPostData } from "../../api";
import format from "date-fns/format";

const AddNewEvents = () => {
  const [title, setTitle] = useState("");
  const [weddingDecription, setWeddingDecription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedDate = format(new Date(startTime), "MM/dd/yyyy");
    const formattedDateEnd = format(new Date(endTime), "MM/dd/yyyy");

    try {
      const postData = await eventPostData({
        title: title,
        weddingDecription: weddingDecription,
        startTime: formattedDate,
        endTime: formattedDateEnd,
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
            type="date"
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
            type="date"
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

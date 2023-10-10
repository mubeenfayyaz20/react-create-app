import React from "react";
import { eventPostData } from "../../api";
import EventForm from "../../components/EventForm";

const AddNewEvents = () => {
  const apiCall = async (data) => {
    try {
      const postData = await eventPostData(data);
      return postData;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="addNewEventForm">
      <h3 className="mb-3">Add Event</h3>
      <EventForm apiCall={apiCall} />
    </div>
  );
};

export default AddNewEvents;

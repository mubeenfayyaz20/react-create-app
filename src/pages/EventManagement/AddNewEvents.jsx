import React from "react";
import { eventPostData } from "../../api";
import EventForm from "../../components/EventForm";

import { AddNewEventForm } from "./style.ts";

const AddNewEvents = () => {
  const apiCall = async (data, { resetForm }) => {
    try {
      const postData = await eventPostData(data);
      resetForm();

      return postData;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AddNewEventForm>
      <h3 className="mb-3">Add Event</h3>
      <EventForm apiCall={apiCall} />
    </AddNewEventForm>
  );
};

export default AddNewEvents;

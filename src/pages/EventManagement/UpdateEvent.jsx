import React, { useEffect, useState } from "react";
import { getEventDataID, eventUpdateData } from "../../api";
import EventForm from "../../components/EventForm";
import { useParams } from "react-router-dom";

const AddNewEvents = () => {
  const [eventData, setEventData] = useState(null);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    try {
      getEventDataID(id).then((res) => {
        setEventData(res);
      });
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  const apiCall = async (data, { resetForm }) => {
    try {
      const updateData = await eventUpdateData(id, data);
      resetForm();
      return updateData;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="addNewEventForm">
      <h3 className="mb-3">Update Event</h3>
      {eventData && <EventForm apiCall={apiCall} eventData={eventData} />}
    </div>
  );
};

export default AddNewEvents;

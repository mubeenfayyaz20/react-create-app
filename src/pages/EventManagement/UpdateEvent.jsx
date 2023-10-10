import React, { useEffect, useState } from "react";
import { getEventDataID, eventUpdateData, getEventdata } from "../../api";
import { useParams, useNavigate } from "react-router-dom";
import Textfield from "../../elements/Form/Textfield";
import EventForm from "../../components/EventForm";

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

  const apiCall = async (data) => {
    try {
      const postData = await eventUpdateData(id, data);
      return postData;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="addNewEventForm">
      <h3 className="mb-3">Update Event</h3>
      <EventForm apiCall={apiCall} />
    </div>
  );
};

export default AddNewEvents;

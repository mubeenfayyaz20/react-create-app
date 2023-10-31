import React, { useEffect, useState } from "react";
import map from "lodash/map";
import { getEventdata } from "../../api";
import format from "date-fns/format";
import Modal from "../../components/Modal";
import { timeSlots } from "./config";

const EventCalender = () => {
  const [data, setData] = useState([]);
  const [isOpenModal, setOpenModal] = useState(false);
  const [isModalValue, setModalValue] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getEventdata().then((res) => {
      setData(res);
    });
  };

  const modalOpen = (data) => {
    setOpenModal(!isOpenModal);
    setModalValue(data);
  };

  const closeModal = () => {
    setOpenModal(!isOpenModal);
  };

  const isValidDays = (timeSlotvalue, timeSlotkey) => {
    return (
      <tr key={timeSlotkey}>
        <th> {timeSlotvalue}</th>
        {map(data, (eventValue, eventValuekey) => {
          // Filter events based on the current time slot
          const eventTime = format(new Date(eventValue.startTime), "hha");
          const isValid =
            eventTime.toLowerCase() === timeSlotvalue.toLowerCase();

          const { startTime, title } = eventValue || {};

          const startTimeFormat = format(
            new Date(startTime),
            "MM-dd-yyyy' 'hh:mmaaaaa'm'"
          );
          return (
            <td key={eventValuekey} className="text-center eventShowStyle">
              {isValid && (
                <div
                  onClick={() => modalOpen(eventValue)}
                  className="eventCreated"
                >
                  {title} <br /> {startTimeFormat}
                </div>
              )}
            </td>
          );
        })}
      </tr>
    );
  };

  return (
    <>
      <div className="eventCalender">
        <table className="table table-bordered sticky-header">
          <thead className="text-left">
            <tr>
              <th>Date</th>

              {map(data, (value, key) => {
                const formattedDate = format(
                  new Date(value.startTime),
                  "MM-dd-yyyy'"
                );

                return (
                  <th key={key} style={{ textAlign: "center" }}>
                    {formattedDate}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {map(timeSlots, (timeSlotvalue, timeSlotkey) => {
              return isValidDays(timeSlotvalue, timeSlotkey);
            })}
          </tbody>
        </table>
        {isOpenModal && (
          <Modal
            modalTitle={isModalValue.title}
            description={isModalValue.weddingDecription}
            close={closeModal}
          />
        )}
      </div>
    </>
  );
};

export default EventCalender;

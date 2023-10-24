import React, { useEffect, useState } from "react";
import map from "lodash/map";
import { getEventdata } from "../../api";
import format from "date-fns/format";

const EventCalender = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getEventdata().then((res) => {
      setData(res);
    });
  };

  // const tableHeader = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const timeSlots = [
    "01am",
    "02am",
    "03am",
    "04am",
    "05am",
    "06am",
    "07am",
    "08am",
    "09am",
    "10am",
    "11am",
    "12am",
    "01pm",
    "02pm",
    "03pm",
    "04pm",
    "05pm",
    "06pm",
    "07pm",
    "08pm",
    "09pm",
    "10pm",
    "11pm",
    "12pm",
  ];

  return (
    // <>

    // </>
    <div className="eventCalender">
      <table className="table table-bordered sticky-header">
        <thead className="text-left">
          {/* <tr>
            <th>Day</th>
            {map(tableHeader, (value, key) => {
              return (
                <th key={key} style={{ textAlign: "center" }}>
                  {value}
                </th>
              );
            })}
          </tr> */}
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
            return (
              <tr key={timeSlotkey}>
                <th> {timeSlotvalue}</th>
                {map(data, (eventValue, eventValuekey) => {
                  // Filter events based on the current time slot
                  const eventTime = format(
                    new Date(eventValue.startTime),
                    "hha"
                  );
                  const isValid =
                    eventTime.toLowerCase() === timeSlotvalue.toLowerCase();

                  const { startTime, title } = eventValue || {};

                  const startTimeFormat = format(
                    new Date(startTime),
                    "MM-dd-yyyy' 'hh:mmaaaaa'm'"
                  );
                  return (
                    <td
                      key={eventValuekey}
                      className="text-center eventShowStyle"
                    >
                      {isValid ? (
                        <div className="eventCreated">
                          {title} <br /> {startTimeFormat}
                        </div>
                      ) : (
                        ""
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EventCalender;

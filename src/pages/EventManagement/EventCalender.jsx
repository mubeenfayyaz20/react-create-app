import React, { useEffect, useState } from "react";
import map from "lodash/map";
import { getEventdata } from "../../api";
import { format } from "date-fns";
import moment from "moment";

const EventCalender = () => {
  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState(moment());

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getEventdata().then((res) => {
      setData(res);
    });
  };

  const tableHeader = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const timeslots = [
    { id: 0, lable: "12 am" },
    { id: 1, lable: "1 am" },
    { id: 2, lable: "2 am" },
  ];

  const getNextDate = () => {
    const nextDate = moment(currentDate).add(1, "day");
    setCurrentDate(nextDate);
  };

  const dateEqual = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  return (
    <div className="eventCalender">
      <table className="table table-bordered sticky-header">
        <thead className="text-left">
          <tr>
            <th>Days</th>
            {map(tableHeader, (value, key) => {
              return <th key={key}>{value}</th>;
            })}
          </tr>
          <tr>
            <th>Date</th>
            {map(data, (value, key) => {
              const formattedDate = format(new Date(value.startTime), "dd'");

              return <th key={key}>{formattedDate}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {/* Map over the time slots */}
          {map(timeslots, (timeSlot, timeIndex) => (
            <tr key={timeIndex}>
              <th>{timeSlot.lable}</th>
              {/* Map over the days */}
              {map(tableHeader.slice(1), (day, dayIndex) => {
                // Find the event for the current day and time slot
                // debugger;
                console.log(data);
                // debugger;
                const event =
                  data && data.length > 0
                    ? data.find(
                        (event) =>
                          dateEqual(
                            moment(event.startTime).toDate(),
                            currentDate.toDate()
                          )
                        // moment(event.startTime).hour() === timeSlot.id &&
                        // moment(event.startTime).format("ddd") === day
                      )
                    : null;

                console.log(event);

                return (
                  <td key={dayIndex}>
                    {event ? <div>{event.title}</div> : null}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={getNextDate}>Next Day</button>
    </div>
  );
};

export default EventCalender;

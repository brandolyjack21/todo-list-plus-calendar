import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Month = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function EventList({ year, month }) {
  const [eventList, setEventList] = useState([]);
  const updateTasks = useSelector( state => state.updateTasks.value )

  const extractEventList = () => {
    const events = JSON.parse(localStorage.getItem("events"));

    if (events) {
      console.log(year, month,'popopopopopopo');
      const filteredEvents = events.filter((event) => event.year === year && event.month === Month[month]);
      console.log('se esta ejecutandoooo', filteredEvents);
      return filteredEvents;
    } else {
      return [];
    }
  };

  useEffect(() => {
    console.log('se esta ejecutando el log de eventlist');
    setEventList(extractEventList());
  }, [ year, month, updateTasks ]);
  return (
    <section className="w-screen h-auto py-4 flex justify-center">
      <article className="w-80 flex flex-col gap-3">
        <section className="flex justify-center items-center">
          <h3 className="text-xl font-mono">Eventos Guardados.🌈</h3>
        </section>
        <ul className="w-80 flex flex-col gap-2">
          {eventList.map((event, index) => (
            <li className="flex justify-between items-center border-2 border-gray-100 py-2 px-3 rounded-2xl shadow-inner">
              <span>{ event.day }</span>
              <p className="w-48 flex overflow-hidden border-2 border-gray-100 rounded-xl shadow">
                <span className="py-auto spanAnimation">
                  { event.event.description.length > 26 ? `${event.event.description.slice(0, 27)}...` : event.event.description }{" "}
                </span>
                <span className="h-7 py-auto spanAnimation2">
                { event.event.description.length > 26 ? `${event.event.description.slice(0, 27)}...` : event.event.description }
                </span>
              </p>
              <i class="bx bx-news"></i>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default EventList;

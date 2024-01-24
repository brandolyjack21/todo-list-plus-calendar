import React, { useEffect, useState } from "react";
import Days from "./Days";
import CreateEvent from "./../components/CreateEvent";
import EventList from "./EventList";
import { useSelector } from "react-redux";
import SaveAlert from "./SaveAlert";
import AlertSelectDay from "./AlertSelectDay";

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

function Calendar() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [day, setDay] = useState(new Date().getDate());
  const [totalDays, setTotalDays] = useState(
    new Date(year, month + 1, 0).getDate()
  );
  const [dayOfTheWeekend, setDayOfTheWeekend] = useState(
    new Date(year, month, 1).getDay()
  );
  const [clickDate, setClickDate] = useState({});
  const [count, setCount] = useState(false);
  const [savedTaskValue, setSavedTaskValue] = useState(false);
  const savedTask = useSelector((state) => state.updateTasks.value);
  const [viewSaveEvent, setViewSaveEvent] = useState(false);

  const nextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
      setTotalDays(new Date(year + 1, month + 1, 0).getDate());
      setDayOfTheWeekend(new Date(year + 1, 0, 1).getDay());
    }
    if (month === 10) {
      setMonth(month + 1);
      setTotalDays(new Date(year + 1, 0, 0).getDate());
      setDayOfTheWeekend(new Date(year, month + 1, 1).getDay());
    }
    if (month < 10) {
      setMonth(month + 1);
      setTotalDays(new Date(year, month + 2, 0).getDate());
      setDayOfTheWeekend(new Date(year, month + 1, 1).getDay());
    }
    setViewSaveEvent(false);
  };

  const fomerMonth = () => {
    if (month < 1) {
      setYear(year - 1);
      setMonth(11);
      console.log(new Date(year - 1, 0, 0).getDate(), "wwwwwwwwwwwwwww");
      console.log(year, "yearrrrrrrrrrr");
      setTotalDays(new Date(year - 1, 0, 0).getDate());
    }
    if (month >= 1) {
      setMonth(month - 1);
      setTotalDays(new Date(year, month, 0).getDate());
      setDayOfTheWeekend(new Date(year, month, 1).getDay());
    }
    setViewSaveEvent(false);
  };

  const buildDate = (dayDate) => {
    const savedDate = { year, month, day: dayDate };
    setClickDate(savedDate);
  };

  const savedAlert = () => {
    setTimeout(() => {
      console.log(savedTaskValue);
      setSavedTaskValue(false);
    }, 1000);
  };

  const viewAlertDay = () => {
    setViewSaveEvent(true);
    if (!clickDate.day) {
      setTimeout(() => {
        setViewSaveEvent(false);
      }, 3000);
    }
  };

  useEffect(() => {
    setClickDate({ year, month, day: null });
  }, [year, month]);

  useEffect(() => {
    setClickDate({ year, month, day });
  }, []);

  useEffect(() => {
    if (count) {
      setSavedTaskValue(true);
      savedAlert();
    }
    setCount(true);
  }, [savedTask]);

  return (
    <section className="w-screen h-auto">
      <section className="w-1/1 flex flex-col items-center font-mono p-2 text-2xl">
        <h1>{Month[month]}</h1>
        <span className="font-mono pt-8 text-xl">{year}</span>
      </section>
      <section className="w-1/2 m-auto h-10 flex justify-between text-4xl">
        <button onClick={fomerMonth}>
          {" "}
          <i class="bx bx-chevron-left"></i>{" "}
        </button>
        <button onClick={nextMonth}>
          {" "}
          <i class="bx bx-chevron-right"></i>{" "}
        </button>
      </section>
      <section className="flex flex-col my-2 w-screen items-center">
        <section className="w-80 flex flex-row">
          <ul className="w-full grid grid-cols-7 grid-rows-1 bg-blue-600 text-white text-[15px] py-3 px-2 rounded-xl">
            <li className="mx-auto">Dom.</li>
            <li className="mx-auto">Lun.</li>
            <li className="mx-auto">Mar.</li>
            <li className="mx-auto">Mie.</li>
            <li className="mx-auto">Jue.</li>
            <li className="mx-auto">Vie.</li>
            <li className="mx-auto">Sab.</li>
          </ul>
        </section>
        <section className="w-80 h-auto">
          <ul className="w-full grid gap-3 grid-cols-7 grid-rows-4 py-3 px-2 place-items-center">
            <Days
              dayOfTheWeekend={dayOfTheWeekend}
              totalDays={totalDays}
              buildDate={buildDate}
              day={clickDate.day}
              viewSaveEvent={viewSaveEvent}
            />
          </ul>
        </section>
        <section className="w-80 p-3 flex justify-center">
          <button
            onClick={viewAlertDay}
            className="w-auto h-auto px-4 py-3 flex justify-center items-center border-2 border-blue-600 rounded-3xl text-blue-600 font-normal"
          >
            agregar nuevo evento +
          </button>
        </section>
      </section>
      <>
        {console.log(clickDate.day, "==============")}
        {/* <CreateEvent
          day={clickDate.day}
          month={Month[clickDate.month]}
          year={clickDate.year}
        /> */}
      </>
      <>
        <EventList year={year} month={month} />
      </>
      {savedTaskValue ? <SaveAlert /> : <></>}
      {clickDate.day === null && viewSaveEvent ? <AlertSelectDay /> : <></>}
      {clickDate.day !== null && viewSaveEvent ? (
        <CreateEvent
          day={clickDate.day}
          month={Month[clickDate.month]}
          year={clickDate.year}
          setViewSaveEvent={setViewSaveEvent}

        />
      ) : (
        <></>
      )}
    </section>
  );
}

export default Calendar;

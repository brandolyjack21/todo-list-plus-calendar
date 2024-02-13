import React, { useEffect, useState } from "react";
import Days from "./Days";
import CreateEvent from "./../components/CreateEvent";
import EventList from "./EventList";
import { useSelector,useDispatch } from "react-redux";
import SaveAlert from "./SaveAlert";
import AlertSelectDay from "./AlertSelectDay";
import { deleteNewTask } from "../features/date/deleteTask";
import DeleteAlert from "./DeleteAlert";
import CustomizeTheme from "./CustomizeTheme";

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
  const deleteTask = useSelector(state => state.deleteTask.value)
  const colorTheme = useSelector(state => state.colorThemeStatus.value)
  const [viewSaveEvent, setViewSaveEvent] = useState(false);

  const dispatch = useDispatch()

  const nextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
      setTotalDays(new Date(year + 1, 1, 0).getDate());
      setDayOfTheWeekend(new Date(year + 1, 0, 1).getDay());
    }
    if (month === 10) {
      setMonth(11);
      setTotalDays(31);
      setDayOfTheWeekend(new Date(year, 11, 1).getDay());
    }
    if (month < 10) {
      setMonth(month + 1);
      setTotalDays(new Date(year, month + 2, 0).getDate());
      setDayOfTheWeekend(new Date(year, month + 1, 1).getDay());
    }
    setViewSaveEvent(false);
  };

  const fomerMonth = () => {
     if (month > 1) {
       setMonth(month - 1);
       setTotalDays(new Date(year, month, 0).getDate());
       setDayOfTheWeekend(new Date(year, month - 1, 1).getDay())
     }
    if (month === 1) {
      setMonth(month - 1);
      setTotalDays(new Date(year, month, 0).getDate());
      setDayOfTheWeekend(new Date(year, month - 1, 1).getDay());
    }
    if (month < 1) { 
      setYear(year - 1)
      setMonth(11);
      setTotalDays(31);
      setDayOfTheWeekend(new Date(year - 1, 11, 1).getDay());
    }
    setViewSaveEvent(false);
  };

  const buildDate = (dayDate) => {
    const savedDate = { year, month, day: dayDate };
    setClickDate(savedDate);
  };

  const savedAlert = () => {
    setTimeout(() => {
      setSavedTaskValue(false);
    }, 1000);
  };

  const hideDeleteAlert = () => {
    setTimeout(() => {
      dispatch(deleteNewTask())
    }, 1000)
  }

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
    setCount(true)
  }, [savedTask]);

  useEffect(() => {
    if (deleteTask) {
      hideDeleteAlert()
    }

  },[deleteTask])


  return (
    <section className="w-screen h-auto">
    <CustomizeTheme/>
      <section className="w-80 flex flex-col items-center font-mono p-2 text-2xl m-auto relative overflow-hidden">
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
          <ul className={`w-full grid grid-cols-7 grid-rows-1 ${colorTheme.style} text-white text-[15px] py-3 px-2 rounded-xl`}>
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
            className={`w-auto h-auto px-4 py-3 flex justify-center items-center border-2 ${colorTheme.border} rounded-3xl ${colorTheme.text} font-normal`}
          >
            agregar nuevo evento +
          </button>
        </section>
      </section>
      <>
        {/* <CreateEvent
          day={clickDate.day}
          month={Month[clickDate.month]}
          year={clickDate.year}
        /> */}
      </>
      <>
        <EventList year={year} month={month} />
      </>
      {
        savedTaskValue ? <SaveAlert /> : <></>
      }
      {
        deleteTask ? <DeleteAlert/> : <></>
      }
      {
        clickDate.day === null && viewSaveEvent ? <AlertSelectDay /> : <></>
      }
      {
        clickDate.day !== null && viewSaveEvent ? (
          <CreateEvent
            day={clickDate.day}
            month={Month[clickDate.month]}
            year={clickDate.year}
            setViewSaveEvent={setViewSaveEvent}
  
          />
        ) : (
          <></>
        )
      }
    </section>
  );
}

export default Calendar;

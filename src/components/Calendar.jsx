import React, { useEffect, useState } from "react";
import Days from "./Days";

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
  };

  const fomerMonth = () => {
    if (month < 1) {
      setYear(year - 1);
      setMonth(11);
      setTotalDays(new Date(year - 1, 0, 0).getDate());
    }
    if (month >= 1) {
      setMonth(month - 1);
      setTotalDays(new Date(year, month + 1, 0).getDate());
      setDayOfTheWeekend(new Date(year, month, 1).getDay());
    }
  };

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
            {<Days dayOfTheWeekend={dayOfTheWeekend} totalDays={totalDays} />}
          </ul>
        </section>
      </section>
      <section className="w-80 h-auto flex flex-col border-2 border-gray-200 rounded-xl shadow-inner mb-2 mx-auto">
        <h2 className="py-2 mx-auto font-mono text-2xl">Crear Evento</h2>
        <section className="w-80 flex flex-col gap-2">
          <article className="w-3/4 flex flex-col m-auto">
            <label className="font-mono" htmlFor="description">descrición:</label>
            <textarea className="border-2 border-black-100 rounded-lg h-12" id="description" type="text" />
          </article>
          <article className=" h-full px-2">
            <span className="font-mono">fecha:</span>
          </article>
          <article className="flex flex-col px-2">
            <span className="font-mono">tipo:</span>
            <ul className="flex my-3 gap-1 flex-wrap justify-center">
              <li className="w-auto h-8 p-1 px-3 bg-gray-100 flex flex-row items-center rounded-2xl">Personal</li>
              <li className="w-auto p-1 px-3 h-8 bg-gray-100 flex flex-row items-center rounded-2xl">Salud y Bienestar</li>
              <li className="w-auto p-1 px-3 h-8 bg-gray-100 flex flex-row items-center rounded-2xl">Trabajo</li>
              <li className="w-auto p-1 px-3 h-8 bg-gray-100 flex flex-row items-center rounded-2xl">Social</li>
              <li className="w-auto p-1 px-3 h-8 bg-gray-100 flex flex-row items-center rounded-2xl">Entretenimiento</li>
              <li className="w-auto p-1 px-3 h-8 bg-gray-100 flex flex-row items-center rounded-2xl">Finanzas</li>
              <li className="w-auto p-1 px-3 h-8 bg-gray-100 flex flex-row items-center rounded-2xl">Viajes</li>
              <li className="w-auto p-1 px-3 h-8 bg-gray-100 flex flex-row items-center rounded-2xl">Otro.</li>
            </ul>
          </article>
          <section className="w-full flex justify-center">
            <button className="px-5 py-3 m-auto border-blue-600 border-2 mb-1 rounded-3xl text-blue-600 font-sans">Guardar Tarea</button>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Calendar;

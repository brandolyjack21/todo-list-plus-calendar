import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNewTask } from "../features/date/updateTasks";

const typeEvents = [
  "Personal",
  "Salud y Bienestar",
  "Trabajo",
  "Social",
  "Entretenimiento",
  "Finanzas",
  "Viajes",
  "Otro.",
];

function CreateEvent({ day, month, year, setViewSaveEvent }) {
  const [eventType, setEventType] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [typeEventSelect, setTypeEventSelect] = useState(null);
  const colorTheme = useSelector(status => status.colorThemeStatus.value)
  const dispatch = useDispatch();

  const handleValue = (e) => {
    setDescriptionValue(e.target.value);
  };

  const saveEvent = () => {
    if (descriptionValue && day) {
      const event = {
        year,
        month,
        day,
        event: {
          description: descriptionValue.trim(),
          type: eventType,
        },
      };
      setDescriptionValue("");
      setTypeEventSelect(null);
      const events = JSON.parse(localStorage.getItem("events")) ?? [];

      events.push(event);

      localStorage.setItem("events", JSON.stringify(events));
      dispatch(loadNewTask());
      setViewSaveEvent(false);
    }
  };

  const colorEvent = (i) => {
    if (typeEventSelect === i) {
      return `w-auto h-8 p-1 px-3 ${colorTheme.text_100} flex flex-row items-center rounded-2xl text-white-100 cursor-pointer`;
    } else {
      return "w-auto h-8 p-1 px-3 bg-gray-100 flex flex-row items-center rounded-2xl cursor-pointer";
    }
  };

  return (
    <section className="w-screen h-dvh flex items-center flex-col bg-white absolute top-0 left-0">
      <section className="w-80 flex justify-end py-5 text-4xl text-">
        {" "}
        <i onClick={() => setViewSaveEvent(false)} class="bx bx-x"></i>{" "}
      </section>
      <section className="flex justify-center items-center grow">
        <section className="w-80 h-96 flex flex-col border-2 border-gray-200 rounded-xl shadow-inner mb-2 mx-auto">
          <h2 className="py-2 mx-auto font-mono text-2xl">Crear Evento</h2>
          <section className="w-80 flex flex-col gap-2">
            <article className="w-3/4 flex flex-col m-auto">
              <label className="font-mono" htmlFor="description">
                descrición:
              </label>
              <textarea
                className="border-2 border-black-100 rounded-lg h-12 px-2"
                id="description"
                type="text"
                value={descriptionValue}
                onChange={handleValue}
              />
            </article>
            <article className=" h-full px-2">
              {day ? (
                <span className="font-mono">
                  Fecha: {day} de {month} del {year}
                </span>
              ) : (
                <span className="font-mono bg-orange-100">
                  Fecha:Click en un día para añadir.
                </span>
              )}
            </article>
            <article className="flex flex-col px-2">
              <span className="font-mono">Selecciona tipo:</span>
              <ul className="flex my-3 gap-1 flex-wrap justify-center">
                {typeEvents.map((event, index) => (
                  <li
                    onClick={() => {
                      setTypeEventSelect(index);
                      setEventType(event);
                    }}
                    key={index}
                    className={colorEvent(index)}
                  >
                    {event}
                  </li>
                ))}
              </ul>
            </article>
            <section className="w-full flex justify-center">
              <button
                onClick={saveEvent}
                className="px-5 py-3 m-auto border-blue-600 border-2 mb-1 rounded-3xl text-blue-600 font-mono"
              >
                Guardar Evento
              </button>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default CreateEvent;

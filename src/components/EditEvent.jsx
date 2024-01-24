import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadNewTask } from '../features/date/updateTasks';

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

function EditEvent({  day, month, year, description, type, setEditEventView }) {

  const [eventType, setEventType] = useState(type);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [typeEventSelect, setTypeEventSelect] = useState(0);
  const dispatch = useDispatch()

  const handleValue = (e) => {
    console.log(e.target.value, "<=============================");
    setDescriptionValue(e.target.value);
  };

  const colorEvent = (i) => {
    if (typeEventSelect === i) {
      return "w-auto h-8 p-1 px-3 bg-blue-100 flex flex-row items-center rounded-2xl text-white-100 cursor-pointer";
    } else {
      return "w-auto h-8 p-1 px-3 bg-gray-100 flex flex-row items-center rounded-2xl cursor-pointer";
    }
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
      const events = JSON.parse(localStorage.getItem("events")) ?? [];

    let index;

    events.map((e,idx) => {
        if(e.day === day && e.year === year && e.month === month && e.event.description === description && e.event.type === type ){
          console.log('este es el idx',idx);
           index = idx
        }
        console.log( day, year, month, description, type,'iuiuiuiuiuiuiu',e,'e');
      })

    events[index] = event
    console.log(events.length,index,'log de events');

      localStorage.setItem("events", JSON.stringify(events));
      
      setDescriptionValue("");
      setTypeEventSelect(null);
      dispatch(loadNewTask());
      setEditEventView(false);
    }
  };

  const deleteEvent = () => {
     
    const events = JSON.parse(localStorage.getItem("events")) ?? [];

    const newEvents = events.filter((e) =>  !(e.day === day && e.year === year && e.month === month && e.event.description === description && e.event.type === type) )

      localStorage.setItem("events", JSON.stringify(newEvents));
      
      setDescriptionValue("");
      setTypeEventSelect(null);
      dispatch(loadNewTask());
      setEditEventView(false);
  }

  useEffect(() => {
    typeEvents.map((typeEvent, index) => {
      if (typeEvent === type) {
        setTypeEventSelect(index)
      }
    })
  },[])
  return (
    <>
      <section className='w-screen h-dvh flex flex-col justify-center bg-white items-center absolute top-0 left-0'>
        <section className='w-80 py-3 flex justify-end'>
        <i onClick={() => setEditEventView(false)} class='bx bx-x text-4xl'></i>
        </section>
      <section className="w-80 h-96 flex flex-col border-2 border-gray-200 rounded-xl shadow-inner mb-2 mx-auto">
          <h2 className="py-2 mx-auto font-mono text-2xl">Actualizar Evento</h2>
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
            <section className="w-full flex justify-center px-10">
              <button className='w-14 h-14 p-3 border-2 border-red-300 rounded-3xl '>
              <i onClick={() => deleteEvent()} class='bx bxs-trash text-red-300'></i>
              </button>
              <button
                onClick={saveEvent}
                className=" h-14 px-5 py-3 m-auto border-blue-600 border-2 mb-1 rounded-3xl text-blue-600 font-mono"
              >
                Actualizar
              </button>
            </section>
          </section>
        </section>
      </section>
    </>
  )
}

export default EditEvent

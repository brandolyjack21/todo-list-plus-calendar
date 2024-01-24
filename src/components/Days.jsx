import React, { useEffect, useState } from "react";
import CreateEvent from "./CreateEvent";

function Days({ dayOfTheWeekend, totalDays, buildDate, day, viewSaveEvent }) {
  //console.log(dayOfTheWeekend, "<=======", totalDays + dayOfTheWeekend);

  const [spaces, setSpaces] = useState(7 - dayOfTheWeekend);
  const [ chosenElement, setChosenElement ] = useState(0)
  const [ render ,setRender ] = useState(false)
  console.log(spaces,'spaces__________');

  // *********************************************** */

  const counterSpaces = () => {
    const count = totalDays + dayOfTheWeekend;

    //console.log(totalDays, "totalDaysr ");

    if (count <= 35) {
      return 0;
    } else {
      const value = count - 35;
      //console.log(Math.abs(value), "000000");
      return Math.abs(value);
    }
  };

  //*************************************************** */

  const emptyBoxes = () => {
    const value = 7 - (spaces + counterSpaces());
    console.log(value,'value_____________');
    return value;
  };

  //*************************************************** */

  const styles = (i) => {

    console.log(chosenElement, i ,day,'``````````````````````````');

    if (chosenElement !== null && chosenElement === i) {
      return 'w-10 h-10  border-2 rounded-xl p-3 bg-blue-600 text-white shadow-inner cursor-pointer'
    }else{
      return 'w-10 h-10  border-2 rounded-xl p-3 text-blue-600 shadow-inner cursor-pointer'
    }
  }
  //*************************************************** */
  //console.log(totalDays + dayOfTheWeekend + 1, "????????????????");

  //console.log(counterSpaces(), "counterSpaces()");

  useEffect(() => {
    setSpaces( 7 - dayOfTheWeekend)
      setChosenElement(null)
  },[dayOfTheWeekend])

  useEffect(() => {
    setChosenElement(day - 1)
  },[day])
  return (
    <>
      {counterSpaces() ? (
        Array.from({ length: counterSpaces() }).map((day, index) => (
          <li onClick={ () => 
            {buildDate(counterSpaces() === 2 && index === 0 ? totalDays - 1 : totalDays)
            setChosenElement(counterSpaces() === 2 && index === 0 ? totalDays - 1 : totalDays)} } className={ styles(counterSpaces() === 2 && index === 0 ? totalDays - 1 : totalDays) }>
            { counterSpaces() === 2 && index === 0 ? totalDays - 1 : totalDays }
          </li>
        ))
      ) : (
        <></>
      )}
      {Array.from({ length: emptyBoxes() }).map((day, index) => (
        <li className="w-10 h-10  border-2 rounded-xl shadow-inner"></li>
      ))}
      {Array.from({ length: totalDays - counterSpaces() }).map((day, index) => (
        <li onClick={() => {
            buildDate(index + 1)
            setChosenElement(index)
          }} className={ styles(index) }>
          {index + 1}
        </li>
      ))}
    </>
  );
}

export default Days;

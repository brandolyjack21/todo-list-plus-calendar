import React, { useEffect, useState } from "react";
import CreateEvent from "./CreateEvent";
import { useSelector } from "react-redux";

function Days({ dayOfTheWeekend, totalDays, buildDate, day, viewSaveEvent }) {

  const [spaces, setSpaces] = useState(7 - dayOfTheWeekend);
  const [ chosenElement, setChosenElement ] = useState(0)
  const [ render ,setRender ] = useState(false)
  const colorTheme = useSelector(state => state.colorThemeStatus.value)

  // *********************************************** */

  const counterSpaces = () => {
    const count = totalDays + dayOfTheWeekend;

    if (count <= 35) {
      return 0;
    } else {
      const value = count - 35;
      return Math.abs(value);
    }
  };

  //*************************************************** */

  const emptyBoxes = () => {
    const value = 7 - (spaces + counterSpaces());
    return value;
  };

  //*************************************************** */

  const styles = (i) => {

    if (chosenElement !== null && chosenElement === i) {
      return `w-10 h-10 flex justify-end items-end  border-2 rounded-xl px-1 ${colorTheme.style} text-white shadow-inner cursor-pointer`
    }else{
      return `w-10 h-10 flex justify-end items-end  border-2 rounded-xl px-1 ${colorTheme.text} shadow-inner cursor-pointer`
    }
  }
  //*************************************************** */

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

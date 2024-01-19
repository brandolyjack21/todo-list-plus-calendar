import React, { useEffect, useState } from "react";

function Days({ dayOfTheWeekend, totalDays }) {
  //console.log(dayOfTheWeekend, "<=======", totalDays + dayOfTheWeekend);

  const [spaces, setSpaces] = useState(7 - dayOfTheWeekend);
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
  //console.log(totalDays + dayOfTheWeekend + 1, "????????????????");

  //console.log(counterSpaces(), "counterSpaces()");

  useEffect(() => {
    setSpaces( 7 - dayOfTheWeekend)
  },[dayOfTheWeekend])
  return (
    <>
      {counterSpaces() ? (
        Array.from({ length: counterSpaces() }).map((day, index) => (
          <li className="w-10 h-10 rounded-xl p-3 border-2 text-blue-600 shadow-inner">
            {totalDays}
          </li>
        ))
      ) : (
        <></>
      )}
      {Array.from({ length: emptyBoxes() }).map((day, index) => (
        <li className="w-10 h-10  border-2 rounded-xl shadow-inner"></li>
      ))}
      {Array.from({ length: totalDays - counterSpaces() }).map((day, index) => (
        <li className="w-10 h-10  border-2 rounded-xl p-3 text-blue-600 shadow-inner">
          {index + 1}
        </li>
      ))}
    </>
  );
}

export default Days;

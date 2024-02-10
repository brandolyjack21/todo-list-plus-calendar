import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newColor } from "../features/date/colorThemeStatus";

const colors = [
  {
    colorName: "gray",
    style: "bg-gray-600",
    border: "border-gray-600",
    text: "text-gray-600",
    text_100: "bg-gray-100",
    shadow: "shadow-gray-500/50"
  },
  {
    colorName: "red",
    style: "bg-red-600",
    border: "border-red-600",
    text: "text-red-600",
    text_100: "bg-red-100",
    shadow: "shadow-red-500/50"
  },
  {
    colorName: "orange",
    style: "bg-orange-600",
    border: "border-orange-600",
    text: "text-orange-600",
    text_100: "bg-orange-100",
    shadow: "shadow-orange-500/50"
  },
  {
    colorName: "amber",
    style: "bg-amber-600",
    border: "border-amber-600",
    text: "text-amber-600",
    text_100: "bg-amber-100",
    shadow: "shadow-amber-500/50"
  },
  {
    colorName: "yellow",
    style: "bg-yellow-600",
    border: "border-yellow-600",
    text: "text-yellow-600",
    text_100: "bg-yellow-100",
    shadow: "shadow-yellow-500/50"
  },
  {
    colorName: "lime",
    style: "bg-lime-600",
    border: "border-lime-600",
    text: "text-lime-600",
    text_100: "bg-lime-100",
    shadow: "shadow-lime-500/50"
  },
  {
    colorName: "green",
    style: "bg-green-600",
    border: "border-green-600",
    text: "text-green-600",
    text_100: "bg-green-100",
    shadow: "shadow-green-500/50"
  },
  {
    colorName: "emerald",
    style: "bg-emerald-600",
    border: "border-emerald-600",
    text: "text-emerald-600",
    text_100: "bg-emerald-100",
    shadow: "shadow-emerald-500/50"
  },
  {
    colorName: "teal",
    style: "bg-teal-600",
    border: "border-teal-600",
    text: "text-teal-600",
    text_100: "bg-teal-100",
    shadow: "shadow-teal-500/50"
  },
  {
    colorName: "cyan",
    style: "bg-cyan-600",
    border: "border-cyan-600",
    text: "text-cyan-600",
    text_100: "bg-cyan-100",
    shadow: "shadow-cyan-500/50"
  },
  {
    colorName: "sky",
    style: "bg-sky-600",
    border: "border-sky-600",
    text: "text-sky-600",
    text_100: "bg-sky-100",
    shadow: "shadow-sky-500/50"
  },
  {
    colorName: "blue",
    style: "bg-blue-600",
    border: "border-blue-600",
    text: "text-blue-600",
    text_100: "bg-blue-100",
    shadow: "shadow-blue-500/50"
  },
  {
    colorName: "indigo",
    style: "bg-indigo-600",
    border: "border-indigo-600",
    text: "text-indigo-600",
    text_100: "bg-indigo-100",
    shadow: "shadow-indigo-500/50"
  },
  {
    colorName: "violet",
    style: "bg-violet-600",
    border: "border-violet-600",
    text: "text-violet-600",
    text_100: "bg-violet-100",
    shadow: "shadow-violet-500/50"
  },
  {
    colorName: "purple",
    style: "bg-purple-600",
    border: "border-purple-600",
    text: "text-purple-600",
    text_100: "bg-purple-100",
    shadow: "shadow-purple-500/50"
  },
  {
    colorName: "fuchsia",
    style: "bg-fuchsia-600",
    border: "border-fuchsia-600",
    text: "text-fuchsia-600",
    text_100: "bg-fuchsia-100",
    shadow: "shadow-fuchsia-500/50"
  },
  {
    colorName: "pink",
    style: "bg-pink-600",
    border: "border-pink-600",
    text: "text-pink-600",
    text_100: "bg-pink-100",
    shadow: "shadow-pink-500/50"
  },
  {
    colorName: "rose",
    style: "bg-rose-600",
    border: "border-rose-600",
    text: "text-rose-600",
    text_100: "bg-rose-100",
    shadow: "shadow-rose-500/50"
  }
];


function CustomizeTheme() {
  const [colorTheme, setColorTheme] = useState();
  const [clickThemeColor, setClickThemeColor] = useState(false);
  const [ count , setCount ] = useState(0)
  const themeSelect = useSelector(state => state.colorThemeStatus.value)
  const dispatch = useDispatch();

  const selectColor = (color) => {
    setColorTheme(color.colorName);
    dispatch(newColor(color));
  };

  const jumpBetweenColor = () => {
    if (colors.length > count) {
      selectColor(colors[count])
      setCount(count + 1)
    }else{
      setCount(0)
    }
  }

  useEffect(() => {
    setColorTheme("blue");
  }, []);
  return (
    <section
      className={`${clickThemeColor ? "customizeTheme customizeThemeNext" : "customizeTheme"} shadow-xl ${ themeSelect.text_100 } ${themeSelect ? themeSelect.shadow : ''}`}
    >
      <section className="flex justify-between gap-3">
        <section
          className="font-sans font-semibold text-black"
        >
          <i
            onClick={jumpBetweenColor}
            className="bx bx-palette bx-rotate-90"
          ></i>
        </section>
        <section className=" text-black">
          { 
            clickThemeColor ? 
            <i onClick={() => setClickThemeColor(!clickThemeColor)} class='bx bx-chevron-up' ></i> :
            <i onClick={() => setClickThemeColor(!clickThemeColor)} class="bx bx-chevron-down"></i>
            }
        </section>
      </section>
      <section>
        <ul className="w-32 grid grid-cols-4 gap-2">
          {colors.map((color, index) => (
            <li
              onClick={() => selectColor(color)}
              key={index}
              className={`w-7 h-7 border-2 ${
                colorTheme === color.colorName ? "border-black" : ""
              } rounded-full shadow-black shadow-sm`}
            >
              <div
                className={`w-6 h-6 border-2 border-white ${color.style} rounded-xl`}
              ></div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default CustomizeTheme;

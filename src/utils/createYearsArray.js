const months = [
  {
    month: "Enero",
    data: [],
  },
  {
    month: "Febrero",
    data: [],
  },
  {
    month: "Marzo",
    data: [],
  },
  {
    month: "Abril",
    data: [],
  },
  {
    month: "Mayo",
    data: [],
  },
  {
    month: "Junio",
    data: [],
  },
  {
    month: "Julio",
    data: [],
  },
  {
    month: "Agosto",
    data: [],
  },
  {
    month: "Septiembre",
    data: [],
  },
  {
    month: "Octubre",
    data: [],
  },
  {
    month: "Noviembre",
    data: [],
  },
  {
    month: "Diciembre",
    data: [],
  },
];

export const createYearsArray = async () => {
  if (!localStorage.getItem("yearArray")) {
    const createYearArray = await Array.from({ length: 1 }, (x) => ({year: new Date().getFullYear(), months}));
    localStorage.setItem('arrayYear',JSON.stringify(createYearArray))
  }
};



export const getYearMonth = () => {

    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    const date = new Date(year, month + 2, 0)
    const totalDaysOfTheMonth = date.getDate()

}
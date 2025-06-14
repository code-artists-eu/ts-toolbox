export const getCalendar = (year: number, month: number) => {
  const firstDay = new Date(year, month - 1, 1)
  const lastDay = new Date(year, month, 0)

  const weeks: { date: Date, diffMonth?: boolean, day: number, YMD: { y: number, m: number, d: number } }[][] = [[]];

  const firstDayDay = firstDay.getDay() - 1 < 0 ? 6 : firstDay.getDay() - 1

  //PREV Month
  for (let i = 0; i < firstDayDay; i++) {
    const date = new Date(year, month - 1, 1)
    date.setDate(date.getDate() - (firstDayDay - i))


    weeks[0][i] = {
      date,
      day: date.getDay() - 1 < 0 ? 6 : date.getDay() - 1,
      YMD: {y: date.getFullYear(), m: date.getMonth() + 1, d: date.getDate()},
      diffMonth: true
    }
  }

  //Current month
  for (let i = 0; i < lastDay.getDate(); i++) {
    const totalIndex = firstDayDay + i
    const week = Math.floor(totalIndex / 7)
    const day = totalIndex - (week * 7)

    if (!weeks[week]) weeks[week] = []

    const date = new Date(year, month - 1, i + 1)

    weeks[week][day] = {
      date,
      day: date.getDay() - 1 < 0 ? 6 : date.getDay() - 1,
      YMD: {y: year, m: month, d: i + 1}
    }
  }

  //NextMonth
  for (let i = 0; weeks[weeks.length - 1].length !== 7; i++) {
    const week = weeks[weeks.length - 1]

    const date = new Date(year, month - 1, 1)
    date.setDate(lastDay.getDate() + i + 1)

    week[week.length] = {
      date,
      day: date.getDay() - 1 < 0 ? 6 : date.getDay() - 1,
      YMD: {y: date.getFullYear(), m: date.getMonth() + 1, d: date.getDate()},
      diffMonth: true
    }
  }

  return weeks
}

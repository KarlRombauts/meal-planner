const startDay = new Date('jan 13, 2019')

const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

startDay.setDate(startDay.getDate() - startDay.getDay())

function getDiffWeeks(newDate, oldDate) {
  return Math.floor((newDate - oldDate) / (1000 * 60 * 60 * 24 * 7))
}

function getThisWeekNumber(oldDate, numberOfWeeks = 1) {
  return getDiffWeeks(new Date(), oldDate) % numberOfWeeks
}

console.log(getThisWeekNumber(startDay, 3))

function getDays(num, oldDate, numberOfWeeks) {
  const today = new Date()
  const weekNumber = getThisWeekNumber(oldDate, numberOfWeeks)

  const result = {}

  if ((today.getDay() + num) / 7 > 1) {
    console.log('to high:', today.getDay() + num)
    result[weekNumber + 1] = days.slice(0, today.getDay() + num - 7)
  }

  result[weekNumber] = days.slice(today.getDay(), today.getDay() + num)
  return result
}

console.log(getDays(5, startDay, 2))

const newDate = document.querySelector('.time-element')
const newDay = document.querySelector('.day-element')

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


const formatTime = (number) => {
    return number < 10 ? '0' + number : number
}
const todayDate = new Date()
const getDate = todayDate.getDay()
let day = weekdays[getDate]
const getSecs = formatTime(todayDate.getUTCSeconds())
const getMin = formatTime(todayDate.getUTCMinutes())
const getHours = formatTime(todayDate.getUTCHours())
newDate.textContent = getHours + ':' + getMin + ':' + getSecs
newDay.textContent = day
console.log(day, getHours, getMin, getSecs)

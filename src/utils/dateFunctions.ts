export const isTimeEquals = (time1?: Date, time2?: Date, compareSeconds = false) => {
  if (!time1 || !time2) return false
  return (
    time1.getHours() === time2.getHours() && 
    time1.getMinutes() === time2.getMinutes() &&
    (!compareSeconds || time1.getSeconds() === time2.getSeconds())
  )
}
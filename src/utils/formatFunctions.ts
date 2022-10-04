export const formatDate = (date: Date) => {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  return `${year}/${month}/${day}`
}

export const formatSalary = (salaryFrom: number, salaryTo: number) => {
  return `$ ${Math.round(salaryFrom / 1000)}k - $ ${Math.round(salaryTo / 1000)}k`
}

export const formatDateToTimeAgo = (time: Date | string) => {
  // expected string 'YYYY/MM/DD'

  const timeSeconds = (typeof time === 'string' ? new Date(time) : time).getTime()

  const timeFormats = [
    [60, 'seconds', 1], // 60
    [120, '1 minute ago', '1 minute from now'], // 60*2
    [3600, 'minutes', 60], // 60*60, 60
    [7200, '1 hour ago', '1 hour from now'], // 60*60*2
    [86400, 'hours', 3600], // 60*60*24, 60*60
    [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
    [604800, 'days', 86400], // 60*60*24*7, 60*60*24
    [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
    [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
    [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
    [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
    [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
    [2903040000, 'years', 29030400] // 60*60*24*7*4*12*100, 60*60*24*7*4*12
  ]

  let seconds = (new Date().getTime() - timeSeconds) / 1000
  let token = 'ago'
  let list_choice = 1

  if (seconds == 0) {
    return 'Just now'
  }

  if (seconds < 0) {
    seconds = Math.abs(seconds)
    token = 'from now'
    list_choice = 2
  }

  for (const format of timeFormats) {
    if (seconds < format[0]) {
      if (typeof format[2] == 'string')
        return format[list_choice]
      else
        return `${Math.floor(seconds / format[2])  } ${  format[1]  } ${  token}`
    }
  }
  return time
}
import { TimesTableType } from "../components/ui/TimePicker"


export const defaultTimes: TimesTableType = {
  morning: [
    new Date(2021, 6, 9, 8),
    new Date(2021, 6, 9, 8, 30),
    new Date(2021, 6, 9, 9),
    new Date(2021, 6, 9, 9, 30),
    new Date(2021, 6, 9, 10),
    new Date(2021, 6, 9, 10, 30),
    new Date(2021, 6, 9, 11),
    new Date(2021, 6, 9, 11, 30)
  ],
  afternoon: [
    new Date(2021, 6, 9, 12),
    new Date(2021, 6, 9, 12, 30),
    new Date(2021, 6, 9, 13),
    new Date(2021, 6, 9, 13, 30),
    new Date(2021, 6, 9, 14),
    new Date(2021, 6, 9, 14, 30),
    new Date(2021, 6, 9, 15),
    new Date(2021, 6, 9, 15, 30),
    new Date(2021, 6, 9, 16),
    new Date(2021, 6, 9, 16, 30)
  ],
  evening: [
    new Date(2021, 6, 9, 17),
    new Date(2021, 6, 9, 17, 30),
    new Date(2021, 6, 9, 18),
    new Date(2021, 6, 9, 18, 30),
    new Date(2021, 6, 9, 19),
    new Date(2021, 6, 9, 19, 30),
    new Date(2021, 6, 9, 20)
  ]
}

export const defaultTimesJoined = Object.keys(defaultTimes).reduce(
  (acc: Date[], value) => {
    acc.push(...defaultTimes[value as keyof TimesTableType])
    return acc
  }, [])

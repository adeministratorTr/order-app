export const getDate = (time) => {
  if (time === 0 || !time) return 'No date' // can be changed
  return time.substring(0, time.indexOf('T'))
}

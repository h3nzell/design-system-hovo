export const formatDate = date => {
  const monthConfig = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'April',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'August',
    9: 'Sept',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  }

  const month = date.getUTCMonth() + 1
  const day = date.getUTCDate()
  const year = date.getUTCFullYear()

  return `${monthConfig[month]} ${day}, ${year}`
}

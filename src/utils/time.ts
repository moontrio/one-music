export function formatMilliseconds(ms: number) {
  let seconds = Math.floor(ms / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)
  seconds %= 60
  minutes %= 60
  hours %= 24

  return hours
    ? `${hours}:${zeroPadding(minutes)}:${zeroPadding(seconds)}`
    : `${minutes}:${zeroPadding(seconds)}`
}

function zeroPadding(num: number) {
  return num < 10 ? `0${num}` : num
}

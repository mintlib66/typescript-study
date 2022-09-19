let MAX_AGE = 100

export function makeRandomNumber(max: number = MAX_AGE) {
  return Math.ceil(Math.random() * max)
}

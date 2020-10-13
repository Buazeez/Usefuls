import { range } from './range'

export function random(start , end) {
    const numbers = range(start, end)
        return numbers[Math.floor(Math.random() * numbers.length)]
}
import type { HttpContext } from '@adonisjs/core/http'

export default class GeneratesController {
  async generate({ request }: HttpContext) {
    const { type, number } = request.qs()
    if (type === 'triangle') {
      const arrayOfNumberElement = number.toString().split('')
      return arrayOfNumberElement.map((x: string, i: number) => {
        const tails = Array.from({ length: i + 1 })
          .map((x) => '0')
          .join('')
        return x + tails
      })
    }

    if (type === 'odd') {
      return Array.from({ length: parseInt(number) + 1 })
        .map((x, i) => {
          return i % 2 === 1 && i
        })
        .filter((x) => x)
    }

    if (type === 'prima') {
      return Array.from({ length: parseInt(number) + 1 })
        .map((x, i) => {
          if( i === 2 || i === 3 || i === 5) return i
          return i % 2 === 1 && i % 3 !== 0 && i % 4 !== 0 && i % 5 !== 0 && i !== 1 && i
        })
        .filter((x) => x)
    }

    return 'no result'
  }
}

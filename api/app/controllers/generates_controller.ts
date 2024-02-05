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

    return 'no result'
  }
}

import type { HttpContext } from '@adonisjs/core/http'

export default class GeneratesController {
  async generate({ request }: HttpContext) {
    const { type } = request.qs()
    return type
  }
}

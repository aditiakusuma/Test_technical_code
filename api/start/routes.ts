/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import GeneratesController from '#controllers/generates_controller'
import router from '@adonisjs/core/services/router'

router.get('/generate', [GeneratesController, 'generate'])

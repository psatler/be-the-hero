// using as reference: https://github.com/Rocketseat/youtube-typescript-nodejs/tree/master/src

import { Router } from 'express'

import OngController from './controllers/OngController'

const routes = Router()

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.store)

export default routes

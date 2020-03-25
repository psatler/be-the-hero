// using as reference: https://github.com/Rocketseat/youtube-typescript-nodejs/tree/master/src

import { Router } from 'express'

import OngController from './controllers/OngController'
import IncidentController from './controllers/IncidentController'

const routes = Router()

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.store)

routes.post('/incidents', IncidentController.store)

export default routes

// using as reference: https://github.com/Rocketseat/youtube-typescript-nodejs/tree/master/src

import { Router } from 'express'

import OngController from './controllers/OngController'
import SessionController from './controllers/SessionController'
import IncidentController from './controllers/IncidentController'
import ProfileController from './controllers/ProfileController'

const routes = Router()

routes.get('/session', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.store)

routes.get('/profile', ProfileController.index)
// routes.get('/profile', IncidentController.listOngIncidents)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.store)
routes.delete('/incidents/:id', IncidentController.delete)

export default routes

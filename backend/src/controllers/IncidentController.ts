import { Request, Response } from 'express'
// import connection from '../database/connection'
const connection = require('../database/connection') // eslint-disable-line @typescript-eslint/no-var-requires

class IncidentController {
  public async index (req: Request, res: Response): Promise<Response> {
    const incidents = await connection('incidents').select('*')

    return res.json(incidents)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const { title, description, value } = req.body
    const ong_id = req.headers.authorization // eslint-disable-line

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id // eslint-disable-line
    })

    return res.json({ id })
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const ong_id = req.headers.authorization // eslint-disable-line

    const incident = await connection('incidents').where('id', id).select('ong_id').first()

    console.log(incident)

    if (!incident) {
      return res.status(400).json({
        error: 'Incident not found'
      })
    }

    if (incident.ong_id !== ong_id) { // eslint-disable-line
      return res.status(401).json({
        error: 'Operation not allowed'
      })
    }

    await connection('incidents').where('id', id).delete()

    return res.status(204).send() // OK status with no content (204)
  }

  // THIS SHOULD'VE BEEN IN THE PROFILE_CONTROLLER.
  // // Though, due to error TS2451: Cannot redeclare block-scoped variable 'connection_1'. I've inserted it here
  // public async listOngIncidents (req: Request, res: Response): Promise<Response> {
  //   const ong_id = req.headers.authorization // eslint-disable-line

  //   const incidents = await connection('incidents').where('ong_id', ong_id).select('*') // incidents of a specific ong

  //   return res.json(incidents)
  // }
}

export default new IncidentController()

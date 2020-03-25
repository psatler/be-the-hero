import { Request, Response } from 'express'
import connection from '../database/connection'

class IncidentController {
  public async store (req: Request, res: Response): Promise<Response> {
    const { title, description, value } = req.body
    const ong_id = req.headers.authorization

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    })

    return res.json({ id })
  }
}

export default new IncidentController()

import { Request, Response } from 'express'
// import crypto from 'crypto'

import connection from '../database/connection'

class IncidentController {
  public async store (req: Request, res: Response): Promise<Response> {
    const { title, description, value } = req.body
    const ongId = req.headers.authorization

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ongId
    })

    return res.json({ id })
  }
}

export default new IncidentController()

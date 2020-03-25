// Controller responsible for a specific Ong (Ong profile)

import { Request, Response } from 'express'
import dbConnection from '../database/connection'

class ProfileController {
  public async index (req: Request, res: Response): Promise<Response> {
    const ong_id = req.headers.authorization // eslint-disable-line

    const incidents = await dbConnection('incidents').where('ong_id', ong_id).select('*') // incidents of a specific ong

    return res.json(incidents)
  }
}

export default new ProfileController()

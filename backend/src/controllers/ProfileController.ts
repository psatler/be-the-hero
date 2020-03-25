// Controller responsible for a specific Ong (Ong profile)

import { Request, Response } from 'express'
// import connection from '../database/connection'
const connectionProfile = require('../database/connection') // eslint-disable-line @typescript-eslint/no-var-requires

class ProfileController {
  public async index (req: Request, res: Response): Promise<Response> {
    const ong_id = req.headers.authorization // eslint-disable-line

    const incidents = await connectionProfile('incidents').where('ong_id', ong_id).select('*') // incidents of a specific ong

    return res.json(incidents)
  }
}

export default new ProfileController()

import { Request, Response } from 'express'
// import connection from '../database/connection'

const connectionSession = require('../database/connection') // eslint-disable-line @typescript-eslint/no-var-requires

class SessionController {
  async create (req: Request, res: Response): Promise<Response> {
    const { id } = req.body

    const ong = await connectionSession('ongs').where('id', id).select('name').first()

    if (!ong) {
      return res.status(400).json({
        error: 'ONG not found with this ID'
      })
    }

    return res.json(ong) // return the name of the ONG (selected above)
  }
}

export default new SessionController()

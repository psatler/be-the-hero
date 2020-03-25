import { Request, Response } from 'express'
import crypto from 'crypto'

// import connection from '../database/connection'
const connectionOng = require('../database/connection') // eslint-disable-line @typescript-eslint/no-var-requires

class OngController {
  public async index (req: Request, res: Response): Promise<Response> {
    const ongs = await connectionOng('ongs').select('*')

    return res.json(ongs)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const { name, email, whatsapp, city, uf } = req.body

    const id = crypto.randomBytes(4).toString('HEX')

    await connectionOng('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return res.json({
      id
    })
  }
}

export default new OngController()

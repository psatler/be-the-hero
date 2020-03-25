import express from 'express'
import cors from 'cors'

import routes from './routes'

class App {
  public server: express.Application

  public constructor () {
    this.server = express()

    this.middlewares()
    // this.databases()
    this.routes()
  }

  private middlewares (): void {
    this.server.use(cors())
    this.server.use(express.json())
  }

  // private databases (): void {

  // }

  private routes (): void {
    this.server.use(routes)
  }
}

export default new App().server

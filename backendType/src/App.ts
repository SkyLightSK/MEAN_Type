import * as express from 'express'

import {Routes} from "./routes/Routes";
import {Config} from "./config/Config";

class App {

  public express

  constructor () {
    
    this.express = express()

    Config.config( this.express )

    this.express.use('/', Routes.mountRoutes() )

  }

}

export default new App().express

import * as mongoose from "mongoose";
import * as cors from 'cors'
import * as bodyParser from 'body-parser'

export class Config {
    /**
     * Configure application
     *
     * @class Config
     * @method config
     */
    static config( express ) : void {

        mongoose.connect('mongodb://localhost:27017/issues')

        const connection = mongoose.connection

        connection.once('open', () => {
            console.log('MongoDB database connection established successfully!')
        })

        express.use(cors());

        express.use(bodyParser.json())

    }
}
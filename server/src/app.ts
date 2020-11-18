import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Connection, createConnection} from 'typeorm';
import routes from './routes/routes';

class App{

    public express: express.Application;

    constructor(){
        this.express = express();
        this.middleware();
        this.routes();
        this.database();
    }

    private middleware(): void {
        //Possible cors options: {origin: `http://localhost:8080`})); 
        this.express.use(cors());                                     // Use cors to permit to use API               
        this.express.use(express.static(__dirname))                   // Where to find static files to give to the view
        this.express.use(express.json());                             // Suport JSON-encoded request bodies
        //this.express.use(express.urlencoded())                      // Suport URL-encoded request bodies (USE INSTEAD OF bodyParser.urlencoded CANT USE BOTH)
        this.express.use(bodyParser.json());                          // Support json encoded bodies
        this.express.use(bodyParser.urlencoded({ extended: true }));  // Support encoded bodies
        this.express.use(routes);
    }

    private routes(): void  {
        this.express.use(routes);
    }

    private async database(): Promise<Connection> {
        return await createConnection();
    }
}

export default new App().express

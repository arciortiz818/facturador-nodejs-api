import express,{ Application } from "express";

import cors from "cors"
import { router } from "./v1/routes"
import db from "./database/mongo";

class App{
    public express:Application;

    constructor(){
        this.express = express()  
        this.express.use(express.json());
        this.express.use(express.urlencoded({extended: true}));
        this.express.use(express.static(__dirname + '/public'));
        this.routes()
        this.middlewares();
        this.dbConnect();
    }

    async dbConnect(){
        db().then(()=>console.log("Conexión ready"))
    }

    routes(){
        this.express.use('/api/v1',router)
        
    }

    async middlewares(){        
        await this.express.use(cors())
    }
}

export default new App().express
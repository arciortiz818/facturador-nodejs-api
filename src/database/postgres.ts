import "dotenv/config"
import {Sequelize} from 'sequelize';

const db = new Sequelize('prueba','admin','1',{
    host: 'localhost',
    dialect: 'postgres'
})

export default db

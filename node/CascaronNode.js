const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./config/db');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT

        this.middleware();
        this.routes();
    }

    middleware(){

        this.app.use( express.static('public') )
        this.app.use( express.json() )
        this.app.use( cors() )

    }

    routes(){
        this.app.use('/api', require('./routes/index'));
    }

    configDataBase(){
        dbConnection();
    }

    listen(){
        // TODO:Llamar esta función en el index  
        this.app.listen(this.port, ()=>{
            console.log(`Escuchando el puerto ${ this.port }`);
        });
    }

}
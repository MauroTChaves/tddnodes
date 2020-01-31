const express = require('express'); 

class AppController {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes()
    }

    /**
     * Fazendo o registro de middlewares da aplicação
     */
    middlewares() {
        this.express.use(express.json());
    }

    /**Fazendo o registro de rotas da aplicação */
    routes(){

    }
}
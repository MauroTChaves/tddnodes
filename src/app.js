require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})
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
        this.express.use(require('./routes'));
    }
}

/**Porta do servidor ainda não está alocada pois assim se separa a parte da aplicação e a parte de ouvir a porta. Rodando os testes em alocar porta  */
module.exports = new AppController().express;
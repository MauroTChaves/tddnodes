const app = require('./app');

/**
 * Se minha aplicação não alocar uma porta livre automaticamente ele rodará na porta 3000
 */
app.listen(process.env.PORT || 3000);
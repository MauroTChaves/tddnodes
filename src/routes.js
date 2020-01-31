const routes = require('express').Router();
const { User } = require('./app/models');

User.create({
    name: "Mauro",
    email:"mtc@gmail.com",
    password_hash: "gakdgkagkgdgad1331"
});

//Definição das rotas da aplicação

module.exports = routes;
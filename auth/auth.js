//Instalamos o modulo Generate Key y vamos utilizarlo para generar la API
const { generateApiKey } = require('generate-api-key');
const User = require("../models/user.js");

//Creacion del numero de la API con letras de a-z y numeros
const genAPIKey = generateApiKey() //Limite para cantidad de API

const authenticateKey = (req, res, next) => {
    apiKey = req.header('api-key'); //Primero busca API key en el header
    if (apiKey == undefined) {
      apiKey = req.query.apiKey;
    }
    next()
 }

module.exports = {
    genAPIKey,
    authenticateKey
}
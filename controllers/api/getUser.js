const User = require("../../models/user.js");

const getUser = (req, res) => {
  User.authenticateKey(apiKey)
    //Si la consulta ha sido correcta, devolvemos esto
    .then((results) => {
      //HTTP Respuesta
      console.log("User autenticado")
      res.json(results)
    })
    //Si nos ha dado erro la consulta, devolvemos esto
    .catch((err) => {
      //HTTP Respuesta
      console.log(err)
      res.status(400).json("Producto no ha sido encontrado")
    })
};

module.exports = getUser;

const User = require("../../models/user.js");
const auth = require("../../auth/auth.js");

const createUser = (req, res) => {
  //Instanciamos un producto
  const user = new User({
    name: req.body.name,
    contrasenya: req.body.contrasenya,
    apiKey: auth.genAPIKey //Incluimos el codigo creado a partir del modulo genAPIKey
  });

  //Guardamos el producto dentro de la base de datos utilizando la funcion create
  User.create(user)
    //Si la consulta ha sido correcta, devolvemos esto
    .then((results) => {
      //HTTP Respuesta
      console.log("Usuario creado correctamente");
      res.json(results);
    })
    //Si nos ha dado erro la consulta, devolvemos esto
    .catch((err) => {
      //HTTP Respuesta
      console.log(err);
      res.status(400).json("Usuario no ha sido creado");
    });
};

module.exports = createUser;
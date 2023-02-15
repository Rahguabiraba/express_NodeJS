const Product = require('../../models/Product.js')

const getProducts = ((req, res) => {
    Product.listAll()
      //Si la consulta ha sido correcta, devolvemos esto
      .then((results) => {
        //HTTP Respuesta
        console.log("Todos los productos encontrados correctamentes")
        res.json(results)
      })
      //Si nos ha dado erro la consulta, devolvemos esto
      .catch((err) => {
        //HTTP Respuesta
        console.log(err)
        res.status(400).json("Los productos no han sido encontrados")
      })
  })

module.exports = getProducts;

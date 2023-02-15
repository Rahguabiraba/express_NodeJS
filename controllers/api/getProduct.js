const Product = require('../../models/Product.js')

const getProduct = ((req, res) => {
  const id = Number(req.params.productID)
  //Llamamos la funcion de Product. 
  Product.listOneProduct(id)
    //Si la consulta ha sido correcta, devolvemos esto
    .then((results) => {
      //HTTP Respuesta
      console.log("Producto encontrado correctamente")
      res.json(results)
    })
    //Si nos ha dado erro la consulta, devolvemos esto
    .catch((err) => {
      //HTTP Respuesta
      console.log(err)
      res.status(400).json("Producto no ha sido encontrado")
    })
})

module.exports = getProduct;

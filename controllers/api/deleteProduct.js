const Product = require('../../models/Product.js')

const deleteProduct = ((req, res) => {
  const id = Number(req.params.productID)
  //Llamamos la funcion de Product. 
  Product.listOneProduct(id)
    //Si la consulta ha sido correcta, devolvemos esto
    .then((results) => {
      //HTTP Respuesta
      console.log("Product borrado correctamente")
      res.json(results)
    })
    //Si nos ha dado erro la consulta, devolvemos esto
    .catch((err) => {
      //HTTP Respuesta
      console.log(err)
      res.status(400).json("Product no ha sido borrado")
    })
})

module.exports = deleteProduct;
const Product = require('../../models/Product.js')

const createProduct = ((req, res) => {
    //Instanciamos un producto
    const product = new Product({
        id: req.body.id,
        name: req.body.name,
        price: req.body.price
    })

    //Guardamos el producto dentro de la base de datos utilizando la funcion create
    Product.create(product)
        //Si la consulta ha sido correcta, devolvemos esto
        .then((results) => {
        //HTTP Respuesta
        console.log("Producto creado correctamente")
        res.json(results)})
        //Si nos ha dado erro la consulta, devolvemos esto
        .catch((err) => {
        //HTTP Respuesta
        console.log(err)
        res.status(400).json("Producto no ha sido creado")
      })
})

module.exports = createProduct;
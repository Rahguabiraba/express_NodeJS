const sql = require("./mysql-connection")

//constructor de Product
const Product = function(product) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
}

//métodos de producto
Product.create = (newProduct) => {
    //Realizamos una promesa. Cuando el servidor nos retorne los resultados del segundo parametro de la consulta...
    let promise = new Promise((res, rej) => {
        sql.query("INSERT INTO products SET ?", newProduct,
        //Aquí están los segundos parametros, que serán rellenados por la propia DB
        (err, results, fields) => {
            res(results)
            rej(err)
        })
    })
    //Retornamos el promise
    return promise;
    
};

//Creado metodo para llamar todos los datos de la base de datos con Promise
Product.listAll = () => {
    //Realizamos una promesa. Cuando el servidor nos retorne los resultados del segundo parametro de la consulta...
    let promise = new Promise((res, rej) => {
        sql.query("SELECT * from PRODUCTS",
        //Aquí están los segundos parametros, que serán rellenados por la propia DB
        (err, results, fields) => {
            res(results)
            rej(err)
        })
    })
    //Retornamos el promise
    return promise;
}

Product.listOneProduct = (idProduct) => {
    //Realizamos una promesa. Cuando el servidor nos retorne los resultados del segundo parametro de la consulta...
    let promise = new Promise((res, rej) => {
        sql.query(`SELECT * from PRODUCTS WHERE id='${idProduct}'`,
        //Aquí están los segundos parametros, que serán rellenados por la propia DB
        (err, results, fields) => {
            res(results)
            rej(err)
        })
    })
    //Retornamos el promise
    return promise;
}

Product.deleteProduct = (idProduct) => {
    //Realizamos una promesa. Cuando el servidor nos retorne los resultados del segundo parametro de la consulta...
    let promise = new Promise((res, rej) => {
        sql.query(`DELETE FROM products WHERE id='${idProduct}'`,
        //Aquí están los segundos parametros, que serán rellenados por la propia DB
        (err, results, fields) => {
            res(results)
            rej(err)
        })
    })
    //Retornamos el promise
    return promise;
}

Product.updateProduct = (updatedProduct) => {
    //Realizamos una promesa. Cuando el servidor nos retorne los resultados del segundo parametro de la consulta...
    let promise = new Promise((res, rej) => {
        sql.query(`UPDATE products SET name='${updatedProduct.name}', price='${updatedProduct.price}' WHERE id=${updatedProduct.id}`,
        //Aquí están los segundos parametros, que serán rellenados por la propia DB
        (err, results, fields) => {
            res(results)
            rej(err)
        })
    })
    //Retornamos el promise
    return promise;
}


module.exports = Product;
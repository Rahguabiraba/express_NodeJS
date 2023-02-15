const sql = require("./mysql-connection")

//constructor de Product
const User = function(user) {
    this.name = user.name;
    this.contrasenya = user.contrasenya;
    this.apiKey = user.apiKey;
}

User.create = (newUser) => {
    //Realizamos una promesa. Cuando el servidor nos retorne los resultados del segundo parametro de la consulta...
    let promise = new Promise((res, rej) => {
        sql.query("INSERT INTO users SET ?", newUser,
        //Aquí están los segundos parametros, que serán rellenados por la propia DB
        (err, results, fields) => {
            res(results)
            rej(err)
        })
    })
    //Retornamos el promise
    return promise;
};

User.authenticateKey = (apiKeyUser) => {
    //Realizamos una promesa. Cuando el servidor nos retorne los resultados del segundo parametro de la consulta...
    let promise = new Promise((res, rej) => {
        sql.query(`SELECT * from USERS WHERE apiKey='${apiKeyUser}'`,
        //Aquí están los segundos parametros, que serán rellenados por la propia DB
        (err, results, fields) => {
            res(results)
            rej(err)
        })
    })
    //Retornamos el promise
    return promise;
}

module.exports = User;
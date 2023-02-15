const express = require('express')
const router = express.Router()
const auth = require("../auth/auth.js")

const getProducts = require('../controllers/api/getProducts.js')
const getProduct = require('../controllers/api/getProduct.js')
const createProduct = require('../controllers/api/createProduct.js')
const deleteProduct = require('../controllers/api/deleteProduct.js')
const updateProduct = require('../controllers/api/updateProduct.js')

//Utilizamos un controlador para crear el usuario
const getUser = require('../controllers/api/getUser.js')
const createUser = require('../controllers/api/createUser.js') 

const getIndex = require('../controllers/site/home.js')

router.get('/api/products', getProducts)
router.get('/api/products/:productID', getProduct)
router.post('/api/products', createProduct)
router.delete('/api/products/:productID', deleteProduct)
router.put('/api/products', updateProduct)

//Utilizamos el post para crear el usuario
router.post('/users/registre', createUser)
router.get('/', auth.authenticateKey, getUser)

//Vista para la URL
router.get('/api', getIndex)

module.exports = router;
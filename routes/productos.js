var express = require('express');
var router = express.Router();
const productosController = require("../controllers/productosController");
const {body} = require('express-validator');
const authentication = require('../middleware/authentication');

/* GET home page. */
router.get('/', authentication.ifNotLoggedin,productosController.index);
router.get('/crear',authentication.ifNotLoggedin,productosController.crear);
router.post("/",authentication.ifNotLoggedin,
[
    body('nombre')
    .notEmpty()
    .withMessage('Debe ingresar un nombre')
],
productosController.guardar);
router.post('/eliminar/:id', authentication.ifNotLoggedin,productosController.eliminar);
router.get('/editar/:id', authentication.ifNotLoggedin,productosController.editar);
router.post("/actualizar", authentication.ifNotLoggedin,
[
    body('nombre')
    .notEmpty()
    .withMessage('Debe ingresar un nombre')
],
productosController.actualizar);

module.exports = router;
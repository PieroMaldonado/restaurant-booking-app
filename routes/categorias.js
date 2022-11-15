var express = require('express');
var router = express.Router();
const categoriasController = require("../controllers/categoriasController");
const {body} = require('express-validator');
const authentication = require('../middleware/authentication');

/* GET home page. */
router.get('/', authentication.ifNotLoggedin,categoriasController.index);
router.get('/crear',authentication.ifNotLoggedin,categoriasController.crear);
router.post("/",authentication.ifNotLoggedin,
[
    body('categoria')
    .notEmpty()
    .withMessage('Debe ingresar un nombre')
],
categoriasController.guardar);
router.post('/eliminar/:id', authentication.ifNotLoggedin,categoriasController.eliminar);
router.get('/editar/:id', authentication.ifNotLoggedin,categoriasController.editar);
router.post("/actualizar", authentication.ifNotLoggedin,
[
    body('categoria')
    .notEmpty()
    .withMessage('Debe ingresar un nombre')
],
categoriasController.actualizar);

module.exports = router;
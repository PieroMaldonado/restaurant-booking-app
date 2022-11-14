var express = require('express');
var router = express.Router();
const mesasController = require("../controllers/mesasController");
const {body} = require('express-validator');
const authentication = require('../middleware/authentication');

/* GET home page. */
router.get('/', authentication.ifNotLoggedin,mesasController.index);
router.get('/crear',authentication.ifNotLoggedin, mesasController.crear);
router.post("/",authentication.ifNotLoggedin,
[
    body('numeroMesa')
    .notEmpty()
    .withMessage('Debe ingresar un número')
],
mesasController.guardar);
router.post('/eliminar/:id', authentication.ifNotLoggedin,mesasController.eliminar);
router.get('/editar/:id', authentication.ifNotLoggedin,mesasController.editar);
router.post("/actualizar", authentication.ifNotLoggedin,
[
    body('numeroMesa')
    .notEmpty()
    .withMessage('Debe ingresar un número')
],
mesasController.actualizar);

module.exports = router;
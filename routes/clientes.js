var express = require('express');
var router = express.Router();
const clientesController = require("../controllers/clientesController");
const {body} = require('express-validator');
const authentication = require('../middleware/authentication');

/* GET home page. */
router.get('/', authentication.ifNotLoggedin,clientesController.index);
router.get('/crear',authentication.ifNotLoggedin, clientesController.crear);
router.post("/",authentication.ifNotLoggedin,
[
    body('nombre')
    .notEmpty()
    .withMessage('Debe ingresar un nombre')
],
clientesController.guardar);
router.post('/eliminar/:id', authentication.ifNotLoggedin,clientesController.eliminar);
router.get('/editar/:id', authentication.ifNotLoggedin,clientesController.editar);
router.post("/actualizar", authentication.ifNotLoggedin,
[
    body('nombre')
    .notEmpty()
    .withMessage('Debe ingresar un nombre')
],
clientesController.actualizar);

module.exports = router;
var express = require('express');
var router = express.Router();
const pedidosController = require("../controllers/pedidosController");
const {body} = require('express-validator');
const authentication = require('../middleware/authentication');

/* GET home page. */
router.get('/:id', authentication.ifNotLoggedin,pedidosController.index);
router.get('/crear/:id',authentication.ifNotLoggedin, pedidosController.crear);
router.post("/:id",authentication.ifNotLoggedin,
// [
//     body('fecha')
//     .notEmpty()
//     .withMessage('Debe ingresar una fecha')
// ],
pedidosController.guardar);
router.post('/eliminar/:id', authentication.ifNotLoggedin,pedidosController.eliminar);
router.get('/editar/:id', authentication.ifNotLoggedin,pedidosController.editar);
router.post("/actualizar", authentication.ifNotLoggedin,
[
    body('reservaID')
    .notEmpty()
    .withMessage('Debe ingresar una reserva')
],
pedidosController.actualizar);

module.exports = router;
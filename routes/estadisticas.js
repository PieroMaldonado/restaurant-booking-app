var express = require('express');
var router = express.Router();
const estadisticasController = require("../controllers/estadisticasController");
const {body} = require('express-validator');
const authentication = require('../middleware/authentication');

/* GET home page. */
router.get('/', authentication.ifNotLoggedin,estadisticasController.index);
// router.get('/crear/:id',authentication.ifNotLoggedin, estadisticasController.crear);
router.post("/",authentication.ifNotLoggedin,
// [
//     body('fecha')
//     .notEmpty()
//     .withMessage('Debe ingresar una fecha')
// ],
estadisticasController.index);
// router.post('/eliminar/:id', authentication.ifNotLoggedin,estadisticasController.eliminar);
// router.get('/editar/:id', authentication.ifNotLoggedin,estadisticasController.editar);
// router.post("/actualizar", authentication.ifNotLoggedin,
// [
//     body('reservaID')
//     .notEmpty()
//     .withMessage('Debe ingresar una reserva')
// ],
// pedidosController.actualizar);

module.exports = router;
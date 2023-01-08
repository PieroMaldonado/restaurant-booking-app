var express = require('express');
var router = express.Router();
const reservasController = require("../controllers/reservasController");
const {body} = require('express-validator');
const authentication = require('../middleware/authentication');

/* GET home page. */
router.get('/', authentication.ifNotLoggedin,reservasController.index);
router.get('/crear',authentication.ifNotLoggedin, reservasController.crear);
router.post("/",authentication.ifNotLoggedin,
// [
//     body('fecha')
//     .notEmpty()
//     .withMessage('Debe ingresar una fecha')
// ],
reservasController.guardar);
router.post('/eliminar/:id', authentication.ifNotLoggedin,reservasController.eliminar);
router.get('/editar/:id', authentication.ifNotLoggedin,reservasController.editar);
router.post("/actualizar", authentication.ifNotLoggedin,
// [
//     body('fecha')
//     .notEmpty()
//     .withMessage('Debe ingresar una fecha')
// ],
reservasController.actualizar);

module.exports = router;
var conexion = require('../config/conexion.js');
var mesa = require('../model/mesa');
var borrar = require("fs");
const { validationResult } = require('express-validator');

module.exports={
    index:function (req,res){
        mesa.obtener(conexion, function(err,datos){
            res.render('mesas/index', {title: 'Aplicación', mesas: datos });
        });
    },
    crear:function (req,res){
        res.render('mesas/crear');
    },
    guardar:function (req,res){
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            errors.array().forEach(error => {
                req.flash('error', error.msg)
            });
            res.render('mesas/crear', {messages: req.flash()});
            return;
        }
        mesa.insertar(conexion, req.body, function(err){
            res.redirect('/mesas');
        });
    },
    eliminar:function (req,res){
        console.log("Recepción de datos");
        console.log(req.params.id);
        mesa.retornarDatosID(conexion,req.params.id, function(err,registros){
            mesa.borrar(conexion, req.params.id, function(err){
                res.redirect('/mesas');
            });
        });
    },
    editar:function(req,res){
        mesa.retornarDatosID(conexion,req.params.id,function(err,registros){
            //console.log(registros[0]);
            res.render('mesas/editar', {mesa:registros[0]});
        });
    },
    actualizar:function(req,res){
        if(req.body.numeroMesa){
            mesa.actualizar(conexion, req.body, function(err){});
        }
        res.redirect('/mesas');
    }
}
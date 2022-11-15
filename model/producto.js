module.exports={
    obtener:function(conexion,funcion){
        conexion.query("SELECT * FROM productos", funcion);
    },
    insertar:function(conexion, datos, funcion){
        conexion.query("INSERT INTO productos (nombre, descripcion, categoria) VALUES (?,?,?)",[datos.nombre, 
        datos.descripcion, datos.categoria], funcion);
    },
    retornarDatosID:function(conexion, id, funcion){
        conexion.query("SELECT * FROM productos WHERE id=?",[id], funcion);
    },
    borrar:function(conexion, id, funcion){
        conexion.query("DELETE FROM productos WHERE id=?",[id], funcion);
    },
    actualizar:function(conexion, datos, funcion){
        console.log(datos.categoria)
        conexion.query("UPDATE productos SET nombre=?,descripcion=?,categoria=? WHERE id=?",[datos.nombre, 
        datos.descripcion, datos.categoria, datos.id], funcion);
    }
}
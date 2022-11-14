var mysql = require("mysql");
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'biblioteca',
    port: 33065
});

con.connect(
    (err)=>{
        if(!err){
            console.log('Conexión establecida');
        }else{
            console.log('Error de conexión');
        }
    }
);
module.exports=con;
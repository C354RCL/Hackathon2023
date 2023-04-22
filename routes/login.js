const express = require('express');
const login = express.Router();
const db = require ('../config/database');
const path = require('path');

login.post('/', async(req, res, next) => {
    const {email, password} = req.body;
    const query = `SELECT * FROM usuarios WHERE correo = '${email}' AND contrasenia = '${password}';`;
    console.log(query);

    const rows = await db.query(query);

    if(email && password) {
        if(rows.length){
            return res.status(200).json({code : 200, message : 'Has iniciado sesion correctamente'})
        } else {
            return res.status(200).json({code : 200, message : 'Usuario y/o contraseña incorrectos'})
        }
    }
    return res.status(500).json({code : 500, message : 'Campo incompletos'});
});

login.get('/', (req, res) => {
    const rutaCompleta = path.join(__dirname, '../public/login.html');
    res.sendFile(rutaCompleta);
  });

module.exports = login;

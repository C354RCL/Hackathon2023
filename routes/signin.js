const express = require('express');
const signin = express.Router();
const db = require('../config/database');

signin.post('/', async (req, res, next) => {
    
    // res.sendFile('./static/sigin.html');

    const {user_name, user_age, user_mail, user_password} = req.body;

    if(user_name && user_age, user_mail, user_password) {

        if(user_age < 18){
            return res.status(500).json({code : 201, message : 'Necesitas ser mayor de edad para registrate'});
        }
        
        let query = `INSERT INTO usuarios (nombre, edad, correo, contraseña) VALUES ('${user_name}', '${user_age}', '${user_mail}', '${user_password}')`;
        const rows = await db.query(query);

        if(rows.affectedRows == 1){
            return res.status(201).json({code : 201, message : 'Usuario resgitrado correctamente'});
        }

        return res.status(500).json({code : 201, message : 'Campos incompletos'});
    }
});


module.exports = signin;
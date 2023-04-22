const express = require('express');
const signin = express.Router();
const db = require('../config/database');

signin.post('/', async (req, res, next) => {
    
    const {user_name, user_age, user_mail, user_password} = req.body;

    if(user_name && user_age && user_mail && user_password) {

        if(user_age < 18){
            return res.status(500).json({code : 201, message : 'Necesitas ser mayor de edad para registrate'});
        }

        let query = `INSERT INTO usuarios (nombre, edad, correo, contrasenia) VALUES ('${user_name}', '${user_age}', '${user_mail}', '${user_password}')`;
        const rows = await db.query(query);

        if(rows.affectedRows == 1){
            return res.status(201).json({code : 201, message : 'Usuario resgitrado correctamente'});
        }

        return res.status(500).json({code : 201, message : 'Campos incompletos'});
    }
});

signin.post('/all', async(req, res, next) => {
    const query = "SELECT * FROM usuario"
    const rows = await db.query(query);

    res.status(200).json({code : 200, message : rows});
});

module.exports = signin;
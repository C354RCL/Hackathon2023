const express = require('express');
const user = express.Router();
const db = require('../config/database');

user.post('/signin', async (req, res, next) => {
    res.render('./static/signin.html');

    const {user_name, user_age, user_mail, user_password} = req.body;

    if(user_name && user_age, user_mail, user_password) {
        let query = `INSERT INTO usuarios (nombre, edad, correo, contraseña) VALUES ('${user_name}', '${user_age}', '${user_mail}', '${user_password}')`;
        const rows = await db.query(query);

        if(rows.affectedRows == 1){
            return res.status(201).json({code : 201, message : 'Usuario resgitrado correctamente'});
        }

        return res.status(500).json({code : 201, message : 'Campos incompletos'});
    }
});

// user.post('/login', async (req, res, next) => {
//     const {user_mail, user_password}
// });

module.exports = user;
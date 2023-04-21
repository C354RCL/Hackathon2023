const express = require('express');
const login = express.Router();
const db = require ('../config/database');
const jwt = require('jsonwebtoken');

login.post('/', async(req, res, next) => {
    const {user_mail, user_password} = req.body;
    const query = `SELECT * FROM usuarios WHERE correo = '${user_mail}' AND contraseña = '${user_password}';`;

    const rows = await db.query(query);

    if(user_mail && user_password) {
        if(rows.length ==  1){
            const token = jwt.sign({
                user_id: rows[0].user_id,
                user_mail: rows[0].user_mail
            }, 'debugkey')
            return res.status(200).json({code : 200, message : token})
        } else {
            return res.status(200).json({code : 200, message : 'Usuario y/o contraseña incorrectos'})
        }
    }
    return res.status(500).json({code : 500, message : 'Campo soncompletos'});
});

module.exports = login;

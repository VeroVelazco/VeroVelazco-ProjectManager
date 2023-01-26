const express = require('express');
const router = express.Router();
const {register,verifyToken,login,changePassword,sendToken,checked} =  require('../controllers/authController');
// api/auth
router
    // recibo los datos de la persona que se registra
    .post('/register', register ) 
    .post('/login', login ) 
    .get('/checked', checked)
    .post('/send-token', sendToken)
    // recetean el password
    .route('/reset-password')
        .get(verifyToken)
        .post(changePassword)

module.exports = router;

const express = require('express');
const router = express.Router();
const validarHora = require('../middlewares/validarHora.js');

router.get('/', validarHora, (req, res) => {
    res.send(`
        <center>
            <h1>Bienvenido a la página final</h1>
            <p>Has accedido correctamente dentro del horario permitido</p>
            <a href="/">Home</a>
        </center>
        `);
        
});

module.exports = router;
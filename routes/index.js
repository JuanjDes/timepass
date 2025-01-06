const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const mensaje = req.query.mensaje || '';
    res.send (`
        <center>
            <h1>Bienvenido al ejercicio de TimePass</h1>
            <p>Hora: ${res.locals.hora}.${res.locals.minuto}</p>
            <p style="color: red;">${mensaje}</p>
            <button>
                <a href="/endroute">Ir al Final</a>
            </button>
        </center>
    `);
});

module.exports = router;
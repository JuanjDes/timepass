// Código principal
const express = require('express');
const app = express();
const horaMiddleware = require('./middlewares/horaMiddleware.js');

// Rutas
const indexRuta = require('./routes/index.js');
const endrouteRuta = require('./routes/endroute.js');

// Middleware para obtener la hora en todas las rutas
app.use(horaMiddleware);

// Rutas
app.use('/', indexRuta);
app.use('/endroute', endrouteRuta);

app.listen(3000, (req, res) => {
    console.log('Server escuchando en puerto 3000');
});

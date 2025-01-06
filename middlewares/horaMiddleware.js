// Recuperamos la hora actual y la guardamos en res.locals
const horaMiddleware = (req, res, next) => {
    const now = new Date();
    const horaActual = now.getHours();
    const minutosActual = now.getMinutes();
    res.locals.minuto = minutosActual;
    res.locals.hora = horaActual;
    next();
};

module.exports = horaMiddleware;
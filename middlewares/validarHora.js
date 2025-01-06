// Aquí validamos la hora
const validarHora = (req, res, next) => {
    
    const horaActual = res.locals.hora;

    if (horaActual >= 12 && horaActual <= 24) {
        // hora valida
        next();
    } else {
        // hora no valida. redirigimos con un mensaje
        const mensaje = 'Aún no son las 12 de la mañana, vuele más tarde.';
        return res.redirect('/?mensaje=' + encodeURIComponent(mensaje));
    }
};

module.exports = validarHora;
(() => {
    'use strict'
    const form = document.getElementById('miFormulario');
    const mensajeError = document.getElementById('mensajeError');
    const mensajeGracias = document.getElementById('mensajeGracias');

    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
            mensajeError.style.display = 'block';   // muestra mensaje en rojo
            mensajeGracias.style.display = 'none';  // oculta el de éxito
        } else {
            event.preventDefault(); // evita recargar la página
            form.classList.add('was-validated');
            mensajeError.style.display = 'none';    // oculta error
            mensajeGracias.style.display = 'block'; // muestra mensaje verde
        }
    }, false);
})();

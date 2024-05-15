// Inicio sesion
const iniciarSesionBtn = document.getElementById('iniciarSesionBtn');
const registrarseBtn = document.getElementById('registrarseBtn');
const formularioInicioSesion = document.getElementById('formularioInicioSesion');
const formularioRegistro = document.getElementById('formularioRegistro');

iniciarSesionBtn.addEventListener('click', () => {
    formularioInicioSesion.classList.remove('oculto');
    formularioRegistro.classList.add('oculto');
});

registrarseBtn.addEventListener('click', () => {
    formularioRegistro.classList.remove('oculto');
    formularioInicioSesion.classList.add('oculto');
});


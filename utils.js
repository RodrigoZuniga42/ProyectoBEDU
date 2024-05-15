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

//Registro
const clienteBtn = document.getElementById('clienteBtn');
const profesionalBtn = document.getElementById('profesionalBtn');
const formularioCliente= document.getElementById('formularioCliente');
const formularioProfesional = document.getElementById('formularioProfesional');

// clienteBtn.addEventListener('click', () =>{
//   formularioCliente.classList.remove('oculto');
// });

document.addEventListener('DOMContentLoaded', () => {
  const clienteBtn = document.getElementById('clienteBtn');
  const formularioCliente = document.getElementById('formularioCliente');

  if (clienteBtn && formularioCliente) {
    clienteBtn.addEventListener('click', () => {
      console.log('Button clicked!');
      formularioCliente.classList.remove('oculto');
    });
  } else {
    console.log('Elements not found:', {
      clienteBtn,
      formularioCliente
    });
  }
});
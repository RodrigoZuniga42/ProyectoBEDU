// Registro & Botones
const btnCliente=document.getElementById('btnCliente');
const btnProfesional= document.getElementById('btnProfesional');

document.getElementById('btnCliente').addEventListener('click', function() {
  
    btnCliente.setAttribute("disabled", true);
    btnProfesional.removeAttribute("disabled");
    document.getElementById('formCliente').style.display = 'block';
    document.getElementById('formProfesional').style.display = 'none';
  });
  
  document.getElementById('btnProfesional').addEventListener('click', function() {
    btnProfesional.setAttribute("disabled", true);
    btnCliente.removeAttribute("disabled");
    document.getElementById('formProfesional').style.display = 'block';
    document.getElementById('formCliente').style.display = 'none';
  });
//Registro Local de Cliente
  const formCliente=document.querySelector('#formCliente');
  formCliente.addEventListener('submit', (e)=> {
    e.preventDefault()
    
    const nombreCliente= document.querySelector('#nombreCliente').value;
    const emailCliente= document.querySelector('#correoCliente').value;
    const constrasenaCliente = document.querySelector('#contrasenaCliente').value;

    const UsersClientes =JSON.parse(localStorage.getItem('usersClientes'))|| [];
    const isClientUserRegistred= UsersClientes.find( userCliente => userCliente.emailCliente === emailCliente)
    if(isClientUserRegistred){
      return alert ('El usuario ya esta registrado!')
    }

    UsersClientes.push({nombreCliente : nombreCliente, emailCliente : emailCliente, constrasenaCliente: constrasenaCliente});
    localStorage.setItem('usersClientes',JSON.stringify(UsersClientes))
    alert('Registro de Cliente Exitoso!')
    window.location.href = 'login.html'

  });
//Registro Local de Profesioanl
  const formProfesional=document.getElementById('formProfesional');
  formProfesional.addEventListener('submit', (e)=> {
    e.preventDefault()

    const nombreProfesional= document.querySelector('#nombreProfesional').value;
    const emailProfesional= document.querySelector('#correoProfesional').value;
    const constrasenaProfesional = document.querySelector('#contrasenaProfesional').value;
    const especialidad = document.querySelector('#especialidad').value;
    const anios = document.querySelector('#anios').value;

    const UsersPro =JSON.parse(localStorage.getItem('usersPro'))|| [];
    const isProlUserRegistred= UsersPro.find( userPro => userPro.emailProfesional === emailProfesional)
   

    if(isProlUserRegistred){
      return alert ('El Profesional ya esta registrado!')
      
    }

    UsersPro.push({nombreProfesional : nombreProfesional , emailProfesional : emailProfesional, constrasenaProfesional: constrasenaProfesional,
       anios: anios, especialidad: especialidad});
    localStorage.setItem('usersPro',JSON.stringify(UsersPro))
    alert('Registro de Profesional Exitoso!')
    window.location.href = 'login.html';

  });

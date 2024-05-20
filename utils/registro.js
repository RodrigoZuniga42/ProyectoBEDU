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

    const UsersProfesionales =JSON.parse(localStorage.getItem('usersProfesionales'))|| [];
    const isProfesionalUserRegistred= UsersProfesionales.find( userProfesional => userProfesional.emailProfesional === emailProfesional)
    if(isProfesionalUserRegistred){
      return alert ('El Profesional ya esta registrado!')
    }

    UsersProfesionales.push({nombreProfesional : nombreProfesional , emailProfesional : emailProfesional, constrasenaProfesional: constrasenaProfesional});
    localStorage.setItem('usersProfesioanles',JSON.stringify(UsersProfesionales))
    alert('Registro de Profesional Exitoso!')
    window.location.href = 'login.html';

  });

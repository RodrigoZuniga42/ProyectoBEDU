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
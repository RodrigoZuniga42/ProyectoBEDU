// Registro
document.getElementById('btnCliente').addEventListener('click', function() {
    document.getElementById('formCliente').style.display = 'block';
    document.getElementById('formProfesional').style.display = 'none';
  });
  
  document.getElementById('btnProfesional').addEventListener('click', function() {
    document.getElementById('formProfesional').style.display = 'block';
    document.getElementById('formCliente').style.display = 'none';
  });
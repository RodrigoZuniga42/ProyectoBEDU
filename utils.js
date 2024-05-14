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

class Navbar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
         
        <nav class="navbar navbar-expand-lg navbar-light bg-light" >
    <div class="container-fluid" >
      <a class="navbar-brand" href="index.html"><img src="assets/laplace-high-resolution-logo-transparent.png" style="height:75px; width: 125px;"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          
          
          <li class="nav-item">
            <a class="nav-link" href="login.html">Login</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Legal Specialist</a></li>
              <li><a class="dropdown-item" href="#">Consultor</a></li>
              
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  `

    }
}

customElements.define('nav-template', Navbar);
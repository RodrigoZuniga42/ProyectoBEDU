
const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailLogin = document.querySelector('#emailLogin').value;
    const password = document.querySelector('#password').value;
    const UsersClientes = JSON.parse(localStorage.getItem('usersClientes')) || [];
    const UsersPro =JSON.parse(localStorage.getItem('usersPro'))|| [];
    
    // Encuantra usuarios
    const validUserClientes = UsersClientes.find(userCliente => userCliente.emailCliente === emailLogin 
        && userCliente.constrasenaCliente === password);

    const ValidProlUser= UsersPro.find( userPro => userPro.emailProfesional === emailLogin && userPro.constrasenaProfesional === password)
       
        
    // No usuario encontrado
    if (!validUserClientes && !ValidProlUser) {
        return alert('Usuario o Contraseña Incorrectos');
        

    } else if(validUserClientes){
    // Bienvenida de usuarios
    alert(`Bienvenido Cliente ${validUserClientes.nombreCliente}`);
    localStorage.setItem('login_success', JSON.stringify(validUserClientes))
    window,location.href='profileCliente.html'

    } else {

        alert(`Bienvenido Profesional ${ValidProlUser.nombreProfesional}`);
        localStorage.setItem('login_success', JSON.stringify(ValidProlUser))
        window,location.href='profile.html'

    }

});
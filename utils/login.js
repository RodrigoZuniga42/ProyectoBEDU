const loginForm= document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const email= document.querySelector('#emailLogin');
    const contrasena = document.querySelector('#password');
    const UsersClientes =JSON.parse(localStorage.getItem('usersClientes'))|| [];
    const UsersProfesionales =JSON.parse(localStorage.getItem('usersProfesionales'))|| [];
    const validUserClientes= UsersClientes.find(userCliente=> userCliente.email === email && userCliente.contrasena === contrasena)
    if(!validUserClientes){
        return alert('Usuario o contrasena incorrectos')
    }
    alert(`Bienvenido'   ${validUserClientes.nombreCliente}`)
})
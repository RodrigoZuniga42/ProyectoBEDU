
//Validacion de login
const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'index.html'
}

// Función para actualizar la foto de perfil

function updatePhoto() {
  const photoInput = document.getElementById('uploadPhoto');
  const profilePhoto = document.getElementById('profilePhoto');
  const file = photoInput.files[0];
  const reader = new FileReader();
  
  reader.onloadend = function() {
    profilePhoto.style.backgroundImage = `url(${reader.result})`;
  }
  
  if (file) {
    reader.readAsDataURL(file);
  }
}

// Función para actualizar la biografía
function updateBio() {
  const bio = document.querySelector('.bio').innerText;
  // Aquí iría el código para enviar la nueva biografía al servidor
  console.log('Biografía actualizada:', bio);
}

// Función para actualizar las habilidades
function updateSkills() {
  const skillsList = document.querySelectorAll('.skills .skill');
  const skills = Array.from(skillsList).map(skill => skill.innerText);
  // Aquí iría el código para enviar las nuevas habilidades al servidor
  console.log('Habilidades actualizadas:', skills);
}

// Función para publicar una actualización
function postUpdate() {
  const updateContent = document.getElementById('newUpdate').value;
  // Aquí iría el código para publicar la actualización en el perfil
  console.log('Update publicado:', updateContent);
}

// Función para buscar ofertas
function searchOffers() {
  const query = document.getElementById('searchOffers').value;
  // Aquí iría el código para buscar ofertas basadas en la consulta
  console.log('Buscando ofertas con:', query);
}
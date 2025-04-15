function toggleMenu() {
    const menu = document.querySelector('.navbar ul'); // Selecciona el menú
    menu.classList.toggle('active'); // Añade o elimina la clase "active"
  }
  
  // Selección de elementos
  const modal = document.getElementById("popup-modal");
  const modalImg = document.getElementById("modal-image");
  const closeBtn = document.querySelector(".close");
  const eventoImgs = document.querySelectorAll(".evento-imagen");
  

  document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");
    modal.style.display = "none";
    dropdowns.forEach(dropdown => {
      const button = dropdown.querySelector(".dropbtn");
      const content = dropdown.querySelector(".dropdown-content");
  
      button.addEventListener("click", (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado
        content.classList.toggle("active"); // Agrega o quita la clase activa
      });
    });
  });


  // Asignar evento de clic a cada imagen
  eventoImgs.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex"; // Muestra el modal
      modalImg.src = img.src; // Asigna la ruta de la imagen al modal
    });
  });
  
  // Cerrar el modal (ya sea con la 'X' o haciendo clic fuera)
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target === closeBtn) {
      modal.style.display = "none"; // Oculta el modal
      modalImg.src = ""; // Limpia la imagen del modal
    }
  });
  
  /*-----  BUSQUEDAS ----------------------*/
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const searchResults = document.getElementById('searchResults');
  const searchBtn = document.getElementById('searchBtn');

  function filterProfiles() {
    const query = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const profiles = searchResults.querySelectorAll('.profile-card');
    
    profiles.forEach(profile => {
      const name = profile.querySelector('p').innerText.toLowerCase();
      const profileCategory = profile.getAttribute('data-category');
      const matchesQuery = name.includes(query);
      const matchesCategory = (selectedCategory === 'todos' || profileCategory === selectedCategory);
      
      if (matchesQuery && matchesCategory) {
        profile.classList.remove('hidden');
      } else {
        profile.classList.add('hidden');
      }
    });
  }
  
  // Búsqueda en tiempo real
  searchInput.addEventListener('input', filterProfiles);
  categoryFilter.addEventListener('change', filterProfiles);
  searchBtn.addEventListener('click', filterProfiles);
  
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      filterProfiles();
    }
  });

  /*----- MODAL INFO PERFIL --------------------*/
  document.addEventListener('DOMContentLoaded', () => {
    // Elementos del modal personalizado
    const detailModal = document.getElementById('profileDetailModal');
    const closeBtnDetail = document.getElementById('profileCloseBtn');
    const profileImageDetail = document.getElementById('profileImageDetail');
    const profileNameDetail = document.getElementById('profileNameDetail');
    const profileInfoDetail = document.getElementById('profileInfoDetail');
  
    // Selecciona todas las tarjetas de perfil de la sección "Descubre"
    const profileCards = document.querySelectorAll('.profile-card');
  
    // Agrega un listener a cada tarjeta para abrir el modal de detalles
    profileCards.forEach(card => {
      card.addEventListener('click', () => {
        // Extrae información del perfil: imagen, nombre y datos adicionales (si los hubiera)
        const imgEl = card.querySelector('img');
        const nameEl = card.querySelector('p');
  
        // Asigna los datos al modal personalizado
        profileImageDetail.src = imgEl.src;
        profileNameDetail.textContent = nameEl.textContent;
        
        // Usa un atributo data-details si lo deseas, o asigna un valor predeterminado
        const details = card.getAttribute('data-details');
        profileInfoDetail.textContent = details ? details : 'Información adicional del perfil...';
  
        // Muestra el modal personalizado
        detailModal.style.display = 'block';
      });
    });
  
    // Cierra el modal al hacer clic en el botón de cierre
    closeBtnDetail.addEventListener('click', () => {
      detailModal.style.display = 'none';
    });
  
    // Cierra el modal al hacer clic fuera del contenido
    window.addEventListener('click', function(event) {
      if (event.target === detailModal) {
        detailModal.style.display = 'none';
      }
    });
  });
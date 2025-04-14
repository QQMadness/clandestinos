function toggleMenu() {
    const menu = document.querySelector('.navbar ul'); // Selecciona el menú
    menu.classList.toggle('active'); // Añade o elimina la clase "active"
  }
  
  // Selección de elementos
  const modal = document.getElementById("popup-modal");
  const modalImg = document.getElementById("modal-image");
  const closeBtn = document.querySelector(".close");
  const eventoImgs = document.querySelectorAll(".evento-imagen");
  
  // Asegúrate de que el modal esté oculto al cargar la página
  /*
  document.addEventListener("DOMContentLoaded", () => {
    modal.style.display = "none";
  });
  */

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
  
  
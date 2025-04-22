function toggleMenu() {
    const menu = document.querySelector('.navbar ul'); // Selecciona el menú
    menu.classList.toggle('active'); // Añade o elimina la clase "active"
  }
  

  /*---------- MODAL EVENTOS ----------------------------------*/
  const modal = document.getElementById("popup-modal");

  if (modal) {
      const modalImg = document.getElementById("modal-image");
      const closeBtn = document.querySelector(".close");
      const eventoImgs = document.querySelectorAll(".evento-imagen");
  
      document.addEventListener("DOMContentLoaded", () => {
          modal.style.display = "none";
      });
  
      eventoImgs.forEach(img => {
          img.addEventListener("click", () => {
              modal.style.display = "flex";
              modalImg.src = img.src;
          });
      });
  
      modal.addEventListener("click", (e) => {
          if (e.target === modal || e.target === closeBtn) {
              modal.style.display = "none";
              modalImg.src = "";
          }
      });
  }

  // Cerrar el modal de imagenes con la tecla ESC 
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "flex") {
      modal.style.display = "none"; 
      modalImg.src = ""; 
    }
  });
  
  
  //------ CONTACTO -------------------------------------
  
  //----- Funciones de validacion de campos del formulario
  function validarNombre() {
    let nombre = document.getElementById("nombre");
    if (nombre.value.trim().length < 4) {
        nombre.classList.add("error-input");
        return false;
    } else {
        nombre.classList.remove("error-input");
        return true;
    }
}

function validarEmail() {
    let email = document.getElementById("email");
    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/)) {
        email.classList.add("error-input");
        return false;
    } else {
        email.classList.remove("error-input");
        return true;
    }
}

function validarMensaje() {
    let mensaje = document.getElementById("mensaje");
    if (mensaje.value.trim().length < 15) {
        mensaje.classList.add("error-input");
        return false;
    } else {
        mensaje.classList.remove("error-input");
        return true;
    }
}


//-------- Validacion en tiempo real del formulario ---------------------
document.getElementById("nombre").addEventListener("input", validarNombre);
document.getElementById("email").addEventListener("input", validarEmail);
document.getElementById("mensaje").addEventListener("input", validarMensaje);


//------ Validacion total del formulario antes de enviar -------------------
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  let nombreValido = validarNombre();
  let emailValido = validarEmail();
  let mensajeValido = validarMensaje();

  // Solo envía si **todos** los campos son válidos
  if (nombreValido && emailValido && mensajeValido) {
      alert("Mensaje enviado correctamente.");
      this.reset();
  }
});  

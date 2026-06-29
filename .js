document.addEventListener("DOMContentLoaded", function() {
    
    // Navegación
    const btnInicio = document.getElementById("inicio");
    if (btnInicio) {
        btnInicio.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
    const btnNoticias = document.getElementById("noticias");
    if (btnNoticias) {
        btnNoticias.addEventListener("click", function() {
            window.location.href = "noticias.html";
        });
    }
    const btnEncuesta = document.getElementById("encuesta");
    if (btnEncuesta) {
        btnEncuesta.addEventListener("click", function() {
            window.location.href = "encuesta.html";
        });
    }

    // Manejo del Formulario (Corregido)
    const form = document.getElementById('encuesta-form');
    if (form) { // Se cambió btnContacto por form
        form.addEventListener('submit', e => {
            e.preventDefault(); 

            const nombre = document.getElementById('nombre').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (!nombre || !correo || !mensaje) {
                alert("Por favor, completa todos los campos obligatorios antes de enviar.");
                return;
            }

            const submitBtn = document.getElementById('submit-btn');
            submitBtn.textContent = "Enviando...";
            submitBtn.disabled = true;

            const scriptURL = 'https://script.google.com/macros/s/AKfycbzqJ8UvstRen36YQdw7SeozSuETlC7HKmbcvr3FOxTtljU8wxs5-hxGFuz3ypKs7Dk/exec'; 
            
            // Se eliminó la 'T' que rompía el código
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    alert("¡Gracias! Tu mensaje ha sido enviado correctamente a la APE.");
                    submitBtn.textContent = "Enviar Mensaje";
                    submitBtn.disabled = false;
                    form.reset(); 
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    alert("Hubo un error al enviar los datos. Por favor, intenta de nuevo.");
                    submitBtn.textContent = "Enviar Mensaje";
                    submitBtn.disabled = false;
                });
        });
    }
});

// El código del carrusel de imágenes se mantiene igual abajo...
document.addEventListener("DOMContentLoaded", () => {
    const imagenes = [
        "https://realestatemarket.com.mx/images/articles/152-inbursa-60/210-tradicion-innovacion-y-vision/214-cupula-de-la-bmv1.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Linear_regression.svg/1280px-Linear_regression.svg.png",
        "https://www.veracruz.gob.mx/finanzas/wp-content/uploads/sites/2/2026/03/Banner-slider-CC-1140x544.jpg"
    ];

    let indiceActual = 0;

    const imagenPrincipal = document.getElementById("ImagenPrincipal");
    const btAnterior = document.getElementById("btAnterior");
    const btSiguiente = document.getElementById("btSiguiente");

    function mostrarImagen(indice) {
        if (imagenPrincipal && imagenes[indice]) {
            imagenPrincipal.src = imagenes[indice];
        }
    }

    mostrarImagen(indiceActual);

    if (btSiguiente) {
        btSiguiente.addEventListener("click", () => {
            indiceActual++;
            if (indiceActual >= imagenes.length) {
                indiceActual = 0;
            }
            mostrarImagen(indiceActual);
        });
    }

    if (btAnterior) {
        btAnterior.addEventListener("click", () => {
            indiceActual--;
            if (indiceActual < 0) {
                indiceActual = imagenes.length - 1; 
            }
            mostrarImagen(indiceActual);
        });
    } 
});
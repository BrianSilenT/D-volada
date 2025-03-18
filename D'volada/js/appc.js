// Selecciona todas las imágenes con clase "zoomable" y el contenedor del lightbox
const zoomableImages = document.querySelectorAll('.zoomable'); // Esto ya incluye TODAS las imágenes con la clase zoomable
const lightbox = document.createElement('div');
const lightboxImg = document.createElement('img');

// Configuración inicial del lightbox
lightbox.id = 'lightbox';
lightbox.classList.add('hidden');
document.body.appendChild(lightbox);
lightbox.appendChild(lightboxImg);

// Agregar estilos básicos dinámicos para el lightbox
lightbox.style.position = 'fixed';
lightbox.style.top = '0';
lightbox.style.left = '0';
lightbox.style.width = '100%';
lightbox.style.height = '100%';
lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
lightbox.style.display = 'flex';
lightbox.style.justifyContent = 'center';
lightbox.style.alignItems = 'center';
lightbox.style.zIndex = '1000';
lightbox.style.pointerEvents = 'none';
lightbox.style.opacity = '0';
lightbox.style.transition = 'opacity 0.3s ease';

lightboxImg.style.maxWidth = '90%';
lightboxImg.style.maxHeight = '90%';
lightboxImg.style.borderRadius = 'var(--border-radius)';
lightboxImg.style.boxShadow = 'var(--box-shadow-hover)';

// Evento para abrir el lightbox
zoomableImages.forEach((img) => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src; // Carga la fuente de la imagen seleccionada
        lightbox.style.pointerEvents = 'auto';
        lightbox.style.opacity = '1'; // Muestra el lightbox
        lightbox.classList.remove('hidden');
        lightbox.classList.add('visible');
    });
});

// Evento para cerrar el lightbox al hacer clic fuera de la imagen
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox || event.target === lightboxImg) {
        lightbox.style.pointerEvents = 'none';
        lightbox.style.opacity = '0'; // Oculta el lightbox
        lightbox.classList.remove('visible');
        lightbox.classList.add('hidden');
    }
});

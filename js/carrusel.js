// Inicializamos el índice del slide actual
let slideIndex = 0;

// Obtenemos todas las diapositivas del carrusel
const slides = document.querySelectorAll('.slide');

// Obtenemos los botones de anterior y siguiente del carrusel
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

/**
 * Función para mostrar el slide correspondiente según su índice
 * @param {number} index - índice del slide a mostrar
 */
function showSlide(index) {
  // Si el índice supera el total de slides, reinicia al primero
  if (index >= slides.length) {
    slideIndex = 0;
  }
  // Si el índice es menor a 0, muestra el último slide
  if (index < 0) {
    slideIndex = slides.length - 1;
  }
  // Calcula el desplazamiento en porcentaje para mover el carrusel
  const offset = -slideIndex * 100;
  // Aplica la transformación para mover el carrusel horizontalmente
  document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

// Evento para avanzar al siguiente slide al hacer clic en el botón 'siguiente'
btnNext.addEventListener('click', () => {
  slideIndex++;
  showSlide(slideIndex);
});

// Evento para retroceder al slide anterior al hacer clic en el botón 'anterior'
nPrev.addEventListener('click', () => {
  slideIndex--;
  showSlide(slideIndex);
});bt

/**
 * Establece un intervalo automático para cambiar de slide cada 5 segundos
 */
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 5000);

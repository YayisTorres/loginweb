document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.coffee-card');
    
    cards.forEach(card => {
        const cardContainer = card.parentElement;
        const cardImage = card.querySelector('.card-image');

        // Efecto de seguimiento del mouse solo para la imagen
        cardContainer.addEventListener('mousemove', function(e) {
            const rect = cardContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calcular rotación más sutil para la imagen
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            // Aplicar transformación solo a la imagen
            cardImage.style.transform = `translateZ(110px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        // Resetear transformación de la imagen cuando el mouse sale
        cardContainer.addEventListener('mouseleave', function() {
            cardImage.style.transform = 'translateZ(100px) rotateX(0deg) rotateY(0deg) scale(1)';
        });

        // Efecto de click en los botones con ripple
        const buttons = card.querySelectorAll('button, a');
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Prevenir navegación para el demo
                if (button.tagName === 'A') {
                    e.preventDefault();
                }

                // Crear efecto de ripple
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(254, 252, 251, 0.4);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                `;
                
                button.style.position = 'relative';
                button.style.overflow = 'hidden';
                button.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);

                // Simular acción del botón
                if (button.classList.contains('btn-primary')) {
                    console.log('Producto añadido al carrito:', card.querySelector('.card-title').textContent);
                } else {
                    console.log('Ver más información de:', card.querySelector('.card-title').textContent);
                }
            });
        });
    });
});
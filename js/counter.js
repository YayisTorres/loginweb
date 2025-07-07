document.addEventListener('DOMContentLoaded', function() {
    const counterSection = document.getElementById('counter-section');
    const counterNumbers = document.querySelectorAll('.counter-number');
    const counterItems = document.querySelectorAll('.counter-item');
    let hasAnimated = false;

    // Función para animar el contador
    function animateCounter(element, target, duration = 2000) {
        const isDecimal = target.toString().includes('.');
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= target) {
                current = target;
                clearInterval(timer);
                element.classList.remove('counting');
            } else {
                element.classList.add('counting');
            }
            
            // Formatear el número
            if (isDecimal) {
                element.textContent = current.toFixed(1);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // Función para iniciar todas las animaciones
    function startCounterAnimation() {
        if (hasAnimated) return;
        
        // Animar la aparición de los items
        counterItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, index * 100);
        });

        // Iniciar los contadores después de un pequeño delay
        setTimeout(() => {
            counterNumbers.forEach(counter => {
                const target = parseFloat(counter.getAttribute('data-target'));
                animateCounter(counter, target);
            });
        }, 500);

        hasAnimated = true;
    }

    // Intersection Observer para detectar cuando la sección es visible
    const observerOptions = {
        threshold: 0.3, // Se activa cuando el 30% de la sección es visible
        rootMargin: '0px 0px -50px 0px' // Margen para activar un poco antes
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounterAnimation();
                observer.unobserve(entry.target); // Dejar de observar después de animar
            }
        });
    }, observerOptions);

    // Comenzar a observar la sección
    if (counterSection) {
        observer.observe(counterSection);
    }

    // Función para reiniciar la animación (opcional, para testing)
    window.resetCounterAnimation = function() {
        hasAnimated = false;
        counterItems.forEach(item => {
            item.classList.remove('animate');
        });
        counterNumbers.forEach(counter => {
            counter.textContent = '0';
            counter.classList.remove('counting');
        });
        observer.observe(counterSection);
    };
});
document.addEventListener('DOMContentLoaded', () => {
    const serviceLinks = document.querySelectorAll('.available-services__grid .service-item');

    const serviceImages = {
        'Editorial': 'css/images/servicios-06.png',
        'Branding': 'css/images/servicios-07.png',
        'Identidad visual': 'css/images/servicios-08.png',
        'Redes sociales': 'css/images/servicios-09.png'
    };

    let floatingImage = null;

    serviceLinks.forEach(link => {
        const serviceName = link.querySelector('.service-item__name').textContent.trim();
        const imageUrl = serviceImages[serviceName];

        if (!imageUrl) return;

        link.addEventListener('mouseenter', (e) => {
            // Crear el elemento de imagen si no existe
            if (!floatingImage) {
                floatingImage = document.createElement('img');
                floatingImage.className = 'floating-service-image';
                document.body.appendChild(floatingImage);
            }

            // Calcular la posición del enlace
            const rect = e.currentTarget.getBoundingClientRect();
            const top = rect.bottom + 20; // 20px por debajo del elemento
            const left = rect.left + rect.width / 2; // Centrado horizontalmente

            // Actualizar la fuente, posición y opacidad
            floatingImage.src = imageUrl;
            floatingImage.style.left = `${left}px`;
            floatingImage.style.top = `${top}px`;
            floatingImage.style.opacity = '1';
        });

        link.addEventListener('mouseleave', () => {
            if (floatingImage) {
                floatingImage.style.opacity = '0';
            }
        });
    });

        const header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
        });
    }

        const publicitySection = document.querySelector('.publicity');

    if (publicitySection) {
        const publicityItems = document.querySelectorAll('.publicity-item');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    publicityItems.forEach(item => {
                        item.classList.add('is-visible');
                    });
                    observer.unobserve(entry.target); // Dejar de observar una vez que la animación se ha disparado
                }
            });
        }, {
            threshold: 0.1 // La animación se dispara cuando el 10% de la sección es visible
        });

        observer.observe(publicitySection);
    }
});

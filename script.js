window.addEventListener("load", () => {
    const modoCarga = document.querySelector(".modo-carga");
    if (!modoCarga) return;

    setTimeout(() => {
        modoCarga.classList.add("desaparecer");

        setTimeout(() => {
            if (modoCarga.parentNode) {
                modoCarga.parentNode.removeChild(modoCarga);
            }
        }, 800); 
    }, 1000); 
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}

const section3Content = document.querySelector('#section3 .section-content');


const observer3 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        
            entry.target.classList.add('visible');

           
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3 
});


observer3.observe(section3Content);


// Animación de aparición al hacer scroll
document.addEventListener("scroll", () => {
    const testimonios = document.querySelectorAll(".testimonio");
    const triggerBottom = window.innerHeight * 0.85;

    testimonios.forEach(t => {
        const boxTop = t.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            t.classList.add("visible");
        }
    });
});

// Movimiento flotante automático
function animarFlotante() {
    document.querySelectorAll(".testimonio").forEach((t, index) => {
        t.style.animation = `flotar ${3 + index}s ease-in-out infinite alternate`;
    });
}

animarFlotante();

// Keyframes flotantes
const style = document.createElement("style");
style.innerHTML = `
@keyframes flotar {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
}`;
document.head.appendChild(style);



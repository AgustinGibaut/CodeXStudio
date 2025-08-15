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



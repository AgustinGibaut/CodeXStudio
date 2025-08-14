


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

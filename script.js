window.addEventListener("load", () => {
    const modoCarga = document.querySelector(".modo-carga");
    setTimeout(() => {
        modoCarga.classList.add("desaparecer");
        setTimeout(() => modoCarga.remove(), 800);
    }, 1500); 
});



const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
}
);

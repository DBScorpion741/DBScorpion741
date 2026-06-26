const navIcons = document.querySelectorAll('.nav-icon');
const sections = document.querySelectorAll('.content-section');

// 1. Lógica para los CLICS (tu código original)
navIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        navIcons.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// 2. Lógica para el SCROLL (detección automática)
window.addEventListener('scroll', () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Detecta si la sección está en el centro de la vista
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute("id");
        }
    });

    navIcons.forEach((icon) => {
        icon.classList.remove("active");
        if (icon.getAttribute("href").includes(current)) {
            icon.classList.add("active");
        }
    });
});

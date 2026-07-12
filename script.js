// Añade tus proyectos aquí
const proyectos = [
    { nombre: "SintuxStudios", imagen: "proyecto1.png", desc: "Estudio de minecraft" },
    { nombre: "VIC", imagen: "proyecto2.png", desc: "Virus para diferentes cosas" },
    { nombre: "GTH", imagen: "proyecto3.png", desc: "???" },
    { nombre: "PerLove", imagen: "proyecto4.png", desc: "???" }    
];

const container = document.getElementById('proyectos-container');
proyectos.forEach(p => {
    const card = document.createElement('div');
    card.className = 'proyecto-card';
    card.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}">
        <div class="proyecto-nombre">
            <div class="titulo">${p.nombre}</div>
            <div class="descripcion">${p.desc}</div>
        </div>
    `;
    container.appendChild(card);
});

// Navegación lógica
const navIcons = document.querySelectorAll('.nav-icon');
const sections = document.querySelectorAll('.content-section');

navIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        navIcons.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach((section) => {
        if (window.scrollY >= (section.offsetTop - 200)) current = section.getAttribute("id");
    });
    navIcons.forEach((icon) => {
        icon.classList.remove("active");
        if (icon.getAttribute("href").includes(current)) icon.classList.add("active");
    });
});

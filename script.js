const proyectos = [
    { nombre: "SintuxStudios", imagen: "p1.png", desc: "Estudio de minecraft", color: "#00cba9" },
    { nombre: "VIC", imagen: "p2.png", desc: "Virus variado", color: "#ff4500" },
    { nombre: "GTH", imagen: "p3.png", desc: "Descripción GTH", color: "#9b30ff" },
    { nombre: "PerLove", imagen: "p4.png", desc: "Love App", color: "#ffd700" },
    // Añade más proyectos aquí para completar la fila inferior
    { nombre: "Proyecto 5", imagen: "p5.png", desc: "Desc 5", color: "#00bfff" },
    { nombre: "Proyecto 6", imagen: "p6.png", desc: "Desc 6", color: "#ff69b4" },
    { nombre: "Proyecto 7", imagen: "p7.png", desc: "Desc 7", color: "#7fff00" },
    { nombre: "Proyecto 8", imagen: "p8.png", desc: "Desc 8", color: "#ffffff" }
];

const container = document.getElementById('proyectos-container');
container.innerHTML = ''; // Limpiamos antes de inyectar

proyectos.forEach(p => {
    const card = document.createElement('div');
    card.className = 'proyecto-card';
    card.style.setProperty('--color-borde', p.color); // Inyectamos el color único
    
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

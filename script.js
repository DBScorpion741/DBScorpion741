const amigos = [
    { nombre: "Amigo 1", imagen: "avatar1.png", insta: "usuario1", discord: "user#1234", color: "#00cba9" },
    { nombre: "Amigo 2", imagen: "avatar2.png", insta: "usuario2", discord: "user#5678", color: "#ff4500" },
    // Añade más amigos aquí...
];

function renderAmigos() {
    const container = document.getElementById('amigos-container');
    container.innerHTML = ''; 

    amigos.forEach(amigo => {
        const card = document.createElement('div');
        card.className = 'amigo-card';
        card.style.setProperty('--color-borde', amigo.color);
        
        card.innerHTML = `
            <img src="${amigo.imagen}" alt="${amigo.nombre}" class="amigo-avatar">
            <div class="amigo-info">
                <h3 class="amigo-nombre">${amigo.nombre}</h3>
                <div class="amigo-social">
                    <a href="https://instagram.com/${amigo.insta}" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="#" title="${amigo.discord}"><i class="fab fa-discord"></i></a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}
// --- Sección Música Dinámica ---
const musicas = [
    { titulo: "Track 1", artista: "Artista A", img: "m1.png", url: "#" },
    { titulo: "Track 2", artista: "Artista B", img: "m2.png", url: "#" },
    { titulo: "Track 3", artista: "Artista C", img: "m3.png", url: "#" }
];

const musicContainer = document.getElementById('music-container');

function renderMusica() {
    if (!musicContainer) return; // Seguridad por si la sección no está en el HTML
    
    musicContainer.innerHTML = '';
    
    musicas.forEach(track => {
        const item = document.createElement('div');
        item.className = 'music-item';
        item.innerHTML = `
            <img src="${track.img}" alt="${track.titulo}" class="music-art">
            <div class="music-details">
                <h3 class="track-title">${track.titulo}</h3>
                <p class="track-artist">${track.artista}</p>
            </div>
            <a href="${track.url}" class="play-btn" target="_blank"><i class="fas fa-play"></i></a>
        `;
        musicContainer.appendChild(item);
    });
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderMusica();
});
const proyectos = [
    { nombre: "SintuxStudios", imagen: "p1.png", desc: "Estudio de minecraft", color: "#00cba9" },
    { nombre: "VIC", imagen: "p2.png", desc: "Virus variado", color: "#26063D" },
    { nombre: "GTH", imagen: "p3.png", desc: "???", color: "#316FD4" },
    { nombre: "PerLove", imagen: "p4.png", desc: "???", color: "#A3271F" },
    { nombre: "Proximamente", imagen: "p5.png", desc: "Desc 5", color: "#757575" },
    { nombre: "Proximamente", imagen: "p6.png", desc: "Desc 6", color: "#757575" },
    { nombre: "Proximamente", imagen: "p7.png", desc: "Desc 7", color: "#757575" },
    { nombre: "Proximamente", imagen: "p8.png", desc: "Desc 8", color: "#757575" }
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

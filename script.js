// --- AMIGOS ---
const amigos = [
    { nombre: "Guillermito", imagen: "avatar1.png", fondo: "fondo1.png", insta: "guillermox", discord: "user#1234", color: "#DBDB46" },
    { nombre: "Chiazu", imagen: "avatar2.png", fondo: "fondo2.png", insta: "chiazu", discord: "user#5678", color: "#60E03A" },
    { nombre: "Tu prima", imagen: "avatar3.png", fondo: "fondo3.png", insta: "usuario3", discord: "user#5678", color: "#757575" },
    { nombre: "Tu hermana", imagen: "avatar4.png", fondo: "fondo4.png", insta: "usuario4", discord: "user#5678", color: "#757575" },
    { nombre: "Tu sobrina", imagen: "avatar5.png", fondo: "fondo5.png", insta: "usuario1", discord: "user#1234", color: "#757575" },
    { nombre: "Tu tia", imagen: "avatar6.png", fondo: "fondo6.png", insta: "usuario2", discord: "user#5678", color: "#757575" },
    { nombre: "Tu abuela", imagen: "avatar7.png", fondo: "fondo7.png", insta: "usuario3", discord: "user#5678", color: "#757575" },
    { nombre: "Tu madrastra", imagen: "avatar8.png", fondo: "fondo8.png", insta: "usuario4", discord: "user#5678", color: "#757575" }     
];

function renderAmigos() {
    const container = document.getElementById('amigos-container');
    if (!container) return;
    container.innerHTML = ''; 

    amigos.forEach(amigo => {
        const card = document.createElement('div');
        card.className = 'amigo-card';
        card.style.setProperty('--color-borde', amigo.color);
        // Aplicamos el fondo con el degradado transparente
        card.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${amigo.fondo}')`;
        card.style.backgroundSize = "cover";
        card.style.backgroundPosition = "center";
        
        card.innerHTML = `
            <img src="${amigo.imagen}" alt="${amigo.nombre}" class="amigo-avatar">
            <div class="amigo-info">
                <h3 class="amigo-nombre">${amigo.nombre}</h3>
                <div class="amigo-social">
                    <a href="https://instagram.com/${amigo.insta}" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://discord.com/users/${amigo.discord}" target="_blank" title="${amigo.discord}"><i class="fab fa-discord"></i></a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// --- MÚSICA ---
const musicas = [
    { titulo: "Wellerman", artista: "SintuxStudios", img: "m1.png", url: "#" },
    { titulo: "Proximamente", artista: "???", img: "m2.png", url: "#" },
    { titulo: "Proximamente", artista: "Artista C", img: "m3.png", url: "#" }
];

function renderMusica() {
    const musicContainer = document.getElementById('music-container');
    if (!musicContainer) return;
    
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

// --- PROYECTOS ---
const proyectos = [
    { nombre: "SintuxStudios", imagen: "p1.png", desc: "Estudio de minecraft", color: "#40d7ea" },
    { nombre: "VIC", imagen: "p2.png", desc: "Virus variado", color: "#6919A6" },
    { nombre: "GTH", imagen: "p3.png", desc: "???", color: "#316FD4" },
    { nombre: "PerLove", imagen: "p4.png", desc: "???", color: "#A3271F" },
    { nombre: "Proximamente", imagen: "p5.png", desc: "Desc 5", color: "#757575" },
    { nombre: "Proximamente", imagen: "p6.png", desc: "Desc 6", color: "#757575" },
    { nombre: "Proximamente", imagen: "p7.png", desc: "Desc 7", color: "#757575" },
    { nombre: "Proximamente", imagen: "p8.png", desc: "Desc 8", color: "#757575" }
];

function renderProyectos() {
    const container = document.getElementById('proyectos-container');
    if (!container) return;
    container.innerHTML = '';

    proyectos.forEach(p => {
        const card = document.createElement('div');
        card.className = 'proyecto-card';
        card.style.setProperty('--color-borde', p.color);
        
        card.innerHTML = `
            <img src="${p.imagen}" alt="${p.nombre}">
            <div class="proyecto-nombre">
                <div class="titulo">${p.nombre}</div>
                <div class="descripcion">${p.desc}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    renderAmigos();
    renderMusica();
    renderProyectos();
});

// --- NAVEGACIÓN ---
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

const proyectos = [
    { nombre: "SintuxCraft NW", categoria: "Minecraft", imagen: "p1.png", desc: "Network de Minecraft", color: "#40d7ea" },
    { nombre: "VIC", categoria: "Virus", imagen: "p2.png", desc: "Proyecto variado", color: "#6919A6" },
    { nombre: "GTH", categoria: "Variado", imagen: "p3.png", desc: "Próximamente", color: "#316FD4" },
    { nombre: "PerLove", categoria: "Variado", imagen: "p4.png", desc: "Próximamente", color: "#A3271F" }
];

function renderProyectos() {
    const container = document.getElementById('proyectos-container');
    if (!container) return;

    container.innerHTML = proyectos.map((p) => `
        <article class="proyecto-card" style="--color-borde: ${p.color};">
            <div class="proyecto-media">
                <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
                <div class="proyecto-fade"></div>
                <span class="proyecto-tag">${p.categoria}</span>
            </div>
            <div class="proyecto-nombre">
                <div class="titulo">${p.nombre}</div>
                <div class="descripcion">${p.desc}</div>
            </div>
        </article>
    `).join('');
}

const musicas = [
    { titulo: "Haiditing", artista: "SintuxCraft NW", img: "m1.png", audio: "" },
    { titulo: "Próximamente", artista: "Por anunciar", img: "m2.png", audio: "" },
    { titulo: "Próximamente", artista: "Por anunciar", img: "m3.png", audio: "" }
];

function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function renderMusica() {
    const musicContainer = document.getElementById('music-container');
    if (!musicContainer) return;

    const audioPlayer = new Audio();
    let activeIndex = -1;

    musicContainer.innerHTML = musicas.map((track, index) => `
        <div class="music-item" data-index="${index}">
            <div class="music-row">
                <img src="${track.img}" alt="${track.titulo}" class="music-art" loading="lazy">
                <div class="music-details">
                    <h3 class="track-title">${track.titulo}</h3>
                    <p class="track-artist">${track.artista}</p>
                </div>
                <button type="button" class="play-btn" data-index="${index}" aria-label="Reproducir ${track.titulo}">
                    <i class="fas fa-play"></i>
                </button>
            </div>
            <div class="music-controls">
                <span class="music-time current-time">0:00</span>
                <input type="range" class="music-progress" value="0" min="0" max="100" step="0.1" aria-label="Progreso de ${track.titulo}">
                <span class="music-time total-time">0:00</span>
            </div>
            <p class="music-status">Todavia no sacamos esta pista de musica.</p>
        </div>
    `).join('');

    const items = Array.from(musicContainer.querySelectorAll('.music-item'));

    function resetItemUI(index) {
        if (index < 0 || !items[index]) return;
        const item = items[index];
        item.classList.remove('is-playing');
        const icon = item.querySelector('.play-btn i');
        if (icon) icon.className = 'fas fa-play';
    }

    function setPlayingUI(index, playing) {
        if (index < 0 || !items[index]) return;
        const item = items[index];
        item.classList.toggle('is-playing', playing);
        const icon = item.querySelector('.play-btn i');
        if (icon) icon.className = playing ? 'fas fa-pause' : 'fas fa-play';
    }

    items.forEach((item, index) => {
        const playBtn = item.querySelector('.play-btn');
        const progress = item.querySelector('.music-progress');
        const status = item.querySelector('.music-status');

        playBtn.addEventListener('click', () => {
            const track = musicas[index];

            if (!track.audio) {
                status.textContent = "Todavia no sacamos esta pista de musica.";
                status.classList.add('visible');
                return;
            }

            status.classList.remove('visible');

            if (activeIndex === index) {
                if (audioPlayer.paused) {
                    audioPlayer.play();
                    setPlayingUI(index, true);
                } else {
                    audioPlayer.pause();
                    setPlayingUI(index, false);
                }
                return;
            }

            if (activeIndex !== -1) {
                resetItemUI(activeIndex);
            }

            activeIndex = index;
            audioPlayer.src = track.audio;
            audioPlayer.play().then(() => {
                setPlayingUI(index, true);
            }).catch(() => {
                status.textContent = "No se pudo cargar el archivo de audio.";
                status.classList.add('visible');
                resetItemUI(index);
            });
        });

        progress.addEventListener('input', () => {
            if (activeIndex === index && Number.isFinite(audioPlayer.duration)) {
                audioPlayer.currentTime = (Number(progress.value) / 100) * audioPlayer.duration;
            }
        });
    });

    audioPlayer.addEventListener('timeupdate', () => {
        if (activeIndex === -1 || !items[activeIndex]) return;
        const item = items[activeIndex];
        const currentEl = item.querySelector('.current-time');
        const totalEl = item.querySelector('.total-time');
        const progress = item.querySelector('.music-progress');

        currentEl.textContent = formatTime(audioPlayer.currentTime);
        totalEl.textContent = formatTime(audioPlayer.duration);

        if (audioPlayer.duration > 0) {
            progress.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        }
    });

    audioPlayer.addEventListener('ended', () => {
        if (activeIndex !== -1) {
            const item = items[activeIndex];
            item.querySelector('.music-progress').value = 0;
            item.querySelector('.current-time').textContent = "0:00";
            resetItemUI(activeIndex);
            activeIndex = -1;
        }
    });
}

const amigos = [
    { nombre: "Guillermito", rol: "Amigo", imagen: "avatar1.png", fondo: "fondo1.png", insta: "guillermox", discord: "user#1234", color: "#DBDB46" },
    { nombre: "Chiazu", rol: "Amigo", imagen: "avatar2.png", fondo: "fondo2.png", insta: "chiazu", discord: "user#5678", color: "#60E03A" }
];

function renderAmigos() {
    const container = document.getElementById('amigos-container');
    if (!container) return;

    container.innerHTML = amigos.map((amigo) => {
        const bgStyle = `linear-gradient(rgba(8, 10, 15, 0.78), rgba(8, 10, 15, 0.88)), url('${amigo.fondo}')`;
        return `
            <article class="amigo-card" style="--color-borde: ${amigo.color}; background-image: ${bgStyle}; background-size: cover; background-position: center;">
                <img src="${amigo.imagen}" alt="${amigo.nombre}" class="amigo-avatar" loading="lazy">
                <span class="amigo-rol">${amigo.rol}</span>
                <div class="amigo-info">
                    <h3 class="amigo-nombre">${amigo.nombre}</h3>
                    <div class="amigo-social">
                        <a href="https://instagram.com/${amigo.insta}" target="_blank" rel="noopener noreferrer" title="Instagram de ${amigo.nombre}" aria-label="Instagram de ${amigo.nombre}">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" title="Discord: ${amigo.discord}" aria-label="Discord de ${amigo.nombre}">
                            <i class="fab fa-discord"></i>
                        </a>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

function initSidebarAndNav() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-sidebar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            const isCollapsed = sidebar.classList.toggle('collapsed');
            toggleBtn.setAttribute('aria-expanded', String(!isCollapsed));
        });
    }

    function setActiveById(id) {
        if (!id) return;
        navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener('click', function () {
            navLinks.forEach((item) => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    window.addEventListener('scroll', () => {
        let current = sections[0]?.getAttribute('id') || '';
        sections.forEach((section) => {
            if (window.scrollY >= section.offsetTop - 220) {
                current = section.getAttribute('id');
            }
        });
        setActiveById(current);
    }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProyectos();
    renderMusica();
    renderAmigos();
    initSidebarAndNav();
});
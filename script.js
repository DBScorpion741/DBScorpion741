const navIcons = document.querySelectorAll('.nav-icon');

navIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        // Quitamos la clase 'active' de todos los elementos
        navIcons.forEach(i => i.classList.remove('active'));
        // Añadimos 'active' solo al elemento clicado
        this.classList.add('active');
    });
});

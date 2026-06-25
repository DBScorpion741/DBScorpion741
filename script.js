const navIcons = document.querySelectorAll('.nav-icon');

navIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        navIcons.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

const navIcons = document.querySelectorAll('.nav-icon');
const sections = document.querySelectorAll('.content-section');

// Lógica de clics
navIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        navIcons.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// Lógica de scroll
window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 200)) {
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

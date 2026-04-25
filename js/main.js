// Seleziona gli elementi della pagina
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const body = document.body;

// =====================================
// GESTIONE DEL TEMA (CHIARO/SCURO)
// =====================================
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    let theme = 'dark';
    if (body.classList.contains('light-mode')) {
        theme = 'light';
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
    
    localStorage.setItem('theme', theme);
});

// =====================================
// GESTIONE DEL MENU MOBILE
// =====================================
menuToggle.addEventListener('click', () => {
    // Apre/chiude il menu laterale
    navLinks.classList.toggle('active');
    
    // Cambia l'icona da hamburger a "X"
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

// Chiude automaticamente il menu quando si clicca su un link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const body = document.body;

// 1. LOGICA MENU MOBILE (Priorità alta)
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        }
    });

    // Chiude il menu dopo aver cliccato un link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    });
}

// 2. LOGICA TEMA (Protetta da try-catch per browser restrittivi)
try {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        body.classList.add('light-mode');
        if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            let theme = body.classList.contains('light-mode') ? 'light' : 'dark';
            if (themeIcon) {
                themeIcon.classList.replace(theme === 'light' ? 'fa-moon' : 'fa-sun', theme === 'light' ? 'fa-sun' : 'fa-moon');
            }
            localStorage.setItem('theme', theme);
        });
    }
} catch (error) {
    console.warn("Memoria del browser bloccata. Il tema non può essere salvato, ma il sito continuerà a funzionare.");
}
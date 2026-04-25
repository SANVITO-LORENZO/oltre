// Seleziona gli elementi della pagina
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Controlla il tema salvato nel localStorage al caricamento della pagina
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Event listener per il click sul bottone del tema
themeToggle.addEventListener('click', () => {
    // Alterna la classe sul body
    body.classList.toggle('light-mode');
    
    // Controlla lo stato attuale per aggiornare l'icona e salvare la preferenza
    let theme = 'dark';
    if (body.classList.contains('light-mode')) {
        theme = 'light';
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
    
    // Salva la scelta nel browser dell'utente
    localStorage.setItem('theme', theme);
});
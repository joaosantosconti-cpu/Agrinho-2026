// Seleciona o botão de alternar tema pelo ID
const themeToggleBtn = document.getElementById('theme-toggle');

// Adiciona um evento de clique ao botão
themeToggleBtn.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no elemento <body> do HTML
    document.body.classList.toggle('dark-mode');
    
    // Altera o texto de exibição do botão dependendo do modo ativo
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Alternar Modo Claro';
    } else {
        themeToggleBtn.textContent = 'Alternar Modo Escuro';
    }
});
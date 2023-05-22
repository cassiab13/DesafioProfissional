// Função para alternar o modo claro e escuro
function DarkMode() {
    const body = document.body;
    const logo = document.querySelector('.logo');
    const menu = document.querySelector('.menu');
    const logoReservex = document.querySelector('.logo_reservex');

    // Verifica se o modo escuro já está ativado
    const isDarkMode = body.classList.contains('dark-mode');
  
    // Desativa
    if (isDarkMode) {
      body.classList.remove('dark-mode');
      logo.classList.remove('dark-mode')
      menu.classList.remove('dark-mode')
      logoReservex.classList.remove('dark-mode')

    } else {
      // Ativa
      body.classList.add('dark-mode');
      logo.classList.add('dark-mode')
      menu.classList.add('dark-mode')
      logoReservex.classList.add('dark-mode')
    }
  }
  
  // Botão Dark Mode
  const darkModeButton = document.getElementById('darkMode');
  darkModeButton.addEventListener('click', DarkMode);
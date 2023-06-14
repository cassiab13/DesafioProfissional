// Função para alternar o modo claro e escuro
function DarkMode() {
  const body = document.body;
  const logo = document.querySelector('.logo');
  const menu = document.querySelector('.menu');
  const sitePrefeitura = document.getElementById('sitePrefeitura');
  const permanecerLogado = document.getElementById('permanecerLogado');
  const darkModeButton = document.getElementById('toggleDarkMode');

  // Verifica se o modo escuro já está ativado
  const isDarkMode = body.classList.contains('dark-mode');

  // Desativa
  if (isDarkMode) {
        body.classList.remove('dark-mode');
        logo.classList.remove('dark-mode');
        menu.classList.remove('dark-mode');
        permanecerLogado.classList.remove('dark-mode');
        sitePrefeitura.classList.remove('dark-mode');
        darkModeButton.src = "../images/MaterialSymbolsDarkModeOutline.svg";
        DarkLogo("../images/logo_sem_fundo.png");
  } else {
        // Ativa
        body.classList.add('dark-mode');
        logo.classList.add('dark-mode');
        menu.classList.add('dark-mode');
        permanecerLogado.classList.add('dark-mode');
        sitePrefeitura.classList.add('dark-mode');
        darkModeButton.src = "../images/MaterialSymbolsLightModeOutline.svg";
        DarkLogo("../images/logo_sem_fundo_branco.png");
    }
}

// Botão Dark Mode
const darkModeButton = document.getElementById('toggleDarkMode');
darkModeButton.addEventListener('click', DarkMode);

// Função para alterar a logo
function DarkLogo(caminhoImagem)
{
  const logoReservex = document.getElementById('logoReservex');
  logoReservex.src = caminhoImagem;
}


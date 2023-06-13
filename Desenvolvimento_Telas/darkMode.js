// Função para alternar o modo claro e escuro
function DarkMode() {
  const body = document.body;
  const logo = document.querySelector('.logo');
  const menu = document.querySelector('.menu');
  const logoReservex = document.querySelector('.logo_reservex');
  const darkModeButton = document.getElementById('toggleDarkMode');

  // Verifica se o modo escuro já está ativado
  const isDarkMode = body.classList.contains('dark-mode');

  // Desativa
  if (isDarkMode) {
    body.classList.remove('dark-mode');
    logo.classList.remove('dark-mode');
    menu.classList.remove('dark-mode');
    logoReservex.classList.remove('dark-mode');
    darkModeButton.src = "../images/MaterialSymbolsDarkModeOutline.svg";
  } else {
    // Ativa
    body.classList.add('dark-mode');
    logo.classList.add('dark-mode');
    menu.classList.add('dark-mode');
    logoReservex.classList.add('dark-mode');
    darkModeButton.src = "../images/MaterialSymbolsLightModeOutline.svg";
  }

  // DarkLogo(!isDarkMode);
}

// Botão Dark Mode
const darkModeButton = document.getElementById('toggleDarkMode');
darkModeButton.addEventListener('click', DarkMode);
darkModeButton.addEventListener('click', DarkLogo);

// Função para alterar a logo
// function DarkLogo(isDarkMode) {
//   console.log("Entrei na função")
//   const logoReservex = document.getElementById('logoReservex');
  
//   if (isDarkMode) {
//     logoReservex.src = "../images/Logo_dark.jpeg";
//   } else {
//     logoReservex.src = "../images/LogoFundo.png";
//   }
// }

function DarkLogo() {
  console.log("Entrei na função")
  const logoReservex = document.getElementById('logoReservex');
    logoReservex.src = "../images/Logo_dark.jpeg";
}


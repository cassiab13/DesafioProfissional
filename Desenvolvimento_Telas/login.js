// validação do login
function enableLogin(){
  document.getElementById('matricula').disabled = false;
  document.getElementById('userPassword').disabled = false;
}

const loginButton = document.getElementById('login-button');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const closeModal = document.getElementById('close-modal');
let tentativas = 0;

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  
  let matriculasDigitadas = [1234, 1235, 1236, 1237];
  let senhasDigitadas = [12345678, 123456, 456789, 7654321];
  
  const matricula = document.getElementById('matricula');
  const senha = document.getElementById('userPassword');
  
  const matriculaDigitada = parseInt(matricula.value);
  const senhaDigitada = parseInt(senha.value);
  
  if (matriculasDigitadas.includes(matriculaDigitada) && senhasDigitadas.includes(senhaDigitada)) {
    // Login bem sucedido
    modalMessage.textContent = 'Login bem sucedido';
    modal.style.display = 'block';

    modal.addEventListener('click', () => {
      modal.style.display = 'none';
      window.location.href="../html/2_paginaInicial.html";
    });

    setTimeout(function(){
      modal.style.display = 'none';
      window.location.href="../html/2_paginaInicial.html";
    }, 3000);
   
  } else {
    // Login mal sucedido
    tentativas++;
    if (tentativas === 3) {
      matricula.disabled = true;
      senha.disabled = true;
      modalMessage.textContent = `Você excedeu o número de tentativas permitidas`;
      modal.style.display = 'block';
      setTimeout(enableLogin, 30000);
      // console.log('Você excedeu o número de tentativas permitidas.');
    } else {
      modalMessage.textContent = `Matrícula e/ou senha incorretos. Tentativa ${tentativas} de 3.`;
      modal.style.display = 'block';
      // console.log(`Matrícula e/ou senha inconrretos. Tentativa ${tentativas} de 3.`);
    }
  }
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

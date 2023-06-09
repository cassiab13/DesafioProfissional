// validação do login
function enableLogin(){
  document.getElementById('matricula').disabled = false;
  document.getElementById('userPassword').disabled = false;
  document.getElementById('login-button').disabled = false;
}
    
function startCountdown() {
  let counter = 5;
  const counterElement = document.getElementById('counter');
  counterElement.textContent = counter;

  const countdownInterval = setInterval(() => {
    counter--;
    
    modalMessage.textContent = `Nova tentativa permitida em ${counter} segundos.`;
    closeModal.disabled = true;
    if (counter <= 0) {
      clearInterval(countdownInterval);
      modal.style.display = 'none';
    }
  }, 1000);
}

const loginButton = document.getElementById('login-button');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const modalMessage1 = document.getElementById('modalMessage');
const closeModal = document.getElementById('close-modal');
let tentativas = 0, contador;

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  
  let matriculasDigitadas = [1234];
  let senhasDigitadas = [12345678];
  let matriculaMotorista = [9876];
  let senhaMotorista = [987654321];
   
  const matricula = document.getElementById('matricula');
  const senha = document.getElementById('userPassword');
  
  const matriculaDigitada = parseInt(matricula.value);
  const senhaDigitada = parseInt(senha.value);
  
  if (matriculasDigitadas.includes(matriculaDigitada) && senhasDigitadas.includes(senhaDigitada)) {
    // Login administrador efetuado com sucesso
    modalMessage.textContent = 'Login efetuado com sucesso';
    modal.style.display = 'block';

    modal.addEventListener('click', () => {
      modal.style.display = 'none';
      window.location.href="../html/2_paginaInicial.html";
    });

    setTimeout(function(){
      modal.style.display = 'none';
      window.location.href="../html/2_paginaInicial.html";
    }, 3000);
   
  } else if (matriculaMotorista.includes(matriculaDigitada) && senhaMotorista.includes(senhaDigitada)){
    modalMessage.textContent = 'Login efetuado com sucesso';
    modal.style.display = 'block';

    modal.addEventListener('click', () => {
      modal.style.display = 'none';
      window.location.href="../html/9_telaMotorista.html";
    });

    setTimeout(function(){
      modal.style.display = 'none';
      window.location.href="../html/9_telaMotorista.html";
    }, 3000);
  } 
  
  else {
    // Login mal sucedido
    tentativas++;
    console.log(tentativas);
    if (tentativas >= 3) {
      matricula.disabled = true; //desabilita campo matrícula
      senha.disabled = true; // desabilita campo senha
      loginButton.disabled = true; // desabilita campo login
      closeModal.disabled = true; // fecha caixa de diálogo
      modalMessage.textContent = `Você excedeu o número de tentativas permitidas`;
      
      modal.style.display = 'block';
      setTimeout(enableLogin, 5000); //desabilita por 20 segundos.
      startCountdown();
    } else {
      modalMessage.textContent = `Matrícula e/ou senha incorretos. Tentativa ${tentativas} de 3.`;
      modal.style.display = 'block';
      // console.log(`Matrícula e/ou senha incorretos. Tentativa ${tentativas} de 3.`);
    }
  }
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

//cria campo com nome e matrícula do usuário logado

function insereNomeMotorista() {
    let nomeMotorista = 'João Maria';
    let spanNomeMotoristaTopo = document.getElementById('nomeMotoristaTopo');
    spanNomeMotoristaTopo.textContent = `Usuário logado: ${nomeMotorista}`;
}

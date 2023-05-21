//recuperar senha
function recuperarSenha() {
    const recuperarButton = document.getElementById('recuperarSenha');
    const matriculasDigitadas = [1234, 1235, 1236, 1237];
  
    console.log(recuperarButton);
    recuperarButton.addEventListener('click', (event) => {
      event.preventDefault();
      
      const matriculaRecuperar = document.getElementById('matricula-digitada').value;
      const matriculaRecuperarInt = parseInt(matriculaRecuperar);
      
      console.log(matriculaRecuperarInt);
  
      if (matriculasDigitadas.includes(matriculaRecuperarInt)) {
        alert("Nova senha enviada para o e-mail cadastrado");
      } else {
        alert("Matrícula inválida");
      }
    });
  }
  
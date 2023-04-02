
class ValidateForm {
    constructor() {
        this.form = document.querySelector('.form');
        this.events();
    }
    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const isValid = this.isValid();
    }
    isValid() {
        let valid = true;

        for (let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let field of this.form.querySelectorAll('.valid')) {
            const label = field.previousElementSibling.innerText;

            if (!field.value) {
                this.createError(field, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }

            if (field.classList.contains('cnh')) {
                if (!this.validCNH(field)) valid = false;
            }

            if (field.classList.contains('register')) {
                if (!this.validRegister(field)) valid = false;
            }

            if (field.classList.contains ('cnhExpyre')) {
                if (!this.validCnhExpyre(field)) valid= false;
            }

            if (field.classList.contains ('email')) {
                if (!this.validEmail(field)) valid= false;
            }
        }
        return valid;
    }

    validEmail (field){
        const email = field.value;
        const emailIsValid = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);

        if ( !emailIsValid){
            this.createError(field, 'E-mail inválido');
            return false;
        }
        return true;
    }

    validCnhExpyre(field){

        const inputDate = field.value;
        const actualDate = new Date();
        const insertDate = new Date(inputDate);
    
        if (insertDate.getTime() < actualDate.getTime()){
            this.createError(field, 'CNH Vencida');
            return false;
        } 
        return true;
      }



    validCNH(field) {
        const cnh = field.value;

        if (cnh.length !== 10) {
            this.createError(field, 'CNH Inválida');
            return false;
        }
        return true;
    }

    validRegister(field){
        const register = field.value;
        
        if (register.length > 8){
            this.createError(field, 'Matrícula inválida');
            return false;
        } return true;
    }

    validData(field) {
        const label = field.previousElementSibling.innerText;
        const inputDate = field.value;
        const actualDate = new Date();
        const insertDate = new Date(inputDate);

        if (!inputDate) {
          this.createError(field, `Campo "${label}" não pode estar em branco.`);
          return false;
        }
    
        if (isNaN(insertDate.getTime())) {
          this.createError(field, `Campo "${label}" contém uma data inválida.`);
          return false;
        }
    
        if (insertDate.getTime() < actualDate.getTime()) {
          this.createError(field, `Campo "${label}" deve ser uma data futura.`);
          return false;
        }
    
        return true;
      }
    createError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidateForm();
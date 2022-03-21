const email = document.querySelector('.email');
const form = document.querySelector('.form');
const emailMessage = document.querySelector('.empty-email-message');
const errorEmail = document.querySelector('.invalid-email-message');

form.addEventListener('submit', e => {
    if(email.value){
    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
    if (regexMatch) {
          errorEmail.textContent = '';
        } else {
          e.preventDefault();
          errorEmail.textContent = 'email is invalid';
          emailMessage.textContent = "";
        }
    } else {
      e.preventDefault();
      emailMessage.textContent = 'You must type in an email';
      errorEmail.textContent = "";
    }
});
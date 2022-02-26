const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const button = document.querySelector('#button');
const submitButton = document.querySelector('#submit-btn');
const agreementInput = document.querySelector('#agreement');

function validaLogin() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  }
  window.alert('Email ou senha inválidos.');
}

button.addEventListener('click', validaLogin);

function enableButton() {
  if (agreementInput.checked) {
    submitButton.disabled = false;
  }
}

agreementInput.addEventListener('click', enableButton);

const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const button = document.querySelector('#button');

function validaLogin() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  }
  window.alert('Email ou senha inválidos.');
}

button.addEventListener('click', validaLogin);





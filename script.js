function checkCredentials() {
  const button = document.getElementById('entrar');
  const email = document.getElementById('email');
  const password = document.getElementById('senha');
  button.addEventListener('click', () => {
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
      alert('Olá, Tryber!');
    }
    alert('Email ou senha inválidos.');
  });
}
checkCredentials();

function enableButton() {
  const checkbox = document.getElementById('agreement');
  const button = document.getElementById('submit-btn');
  if (checkbox.checked === true) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}
enableButton();

function modifyCounter() {
  const textArea = document.getElementById('textarea').value;
  const counter = document.getElementById('counter');
  const maxlimit = 500;
  if (textArea.length > 0) {
    counter.innerText = maxlimit - textArea.length;
  } else {
    counter.innerText = maxlimit;
  }
}
modifyCounter();

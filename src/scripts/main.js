'use strict';

const logo = document.querySelector('.logo');

if (logo) {
  const promise1 = new Promise((resolve, reject) => {
    const handleClick = () => {
      resolve('Promise was resolved!');

      logo.removeEventListener('click', handleClick);
    }

    logo.addEventListener('click', handleClick);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });

  promise1
    .then((result) => showMessage(result))
    .catch((error) => showMessage(error.message, 'error'));

  promise2
    .then((result) => showMessage(result))
    .catch((error) => showMessage(error.message, 'error'));
}

function showMessage(message, type) {
  const messageEl = document.createElement('div');
  messageEl.className = 'message';

  if (type) {
    messageEl.classList.add(`${type}-message`);
  }

  messageEl.textContent = message;

  document.body.append(messageEl);
}

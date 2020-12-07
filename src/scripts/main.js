'use strict';

function createPromise(clickElement) {
  if (clickElement) {
    return new Promise(resolve => {
      clickElement.addEventListener('click', () => {
        resolve('Promise was resolved');
      });
    });
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Promise was rejected')), 5000);
  });
}

function showMessage(text) {
  const message = document.createElement('div');

  message.textContent = text;
  message.className = 'message';

  if (text.includes('rejected')) {
    message.classList.add('error-message');
  }

  document.body.append(message);

  setTimeout(() => message.remove(), 2000);
}

const logo = document.querySelector('.logo');

createPromise(logo)
  .then(showMessage);

createPromise()
  .catch((error) => showMessage(error.message));

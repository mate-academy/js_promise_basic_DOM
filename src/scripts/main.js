'use strict';

const logo = document.querySelector('.logo');

function addMessage(nameMessage, text, error) {
  const message = document.createElement('div');

  if (error) {
    setTimeout(() => {
      message.remove();
    }, 3000);
  }

  message.className = nameMessage;
  message.innerText = text;
  document.body.append(message);
}

const successPromise = new Promise(resolve => {
  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});

successPromise.then(success => addMessage('message', success));

const rejectPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

rejectPromise.catch(() => {
  addMessage('error-message', 'Promise was rejected!', 'error');
});

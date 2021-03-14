'use strict';

const logo = document.querySelector('.logo');

function createMessage(result, text, error) {
  const message = document.createElement('div');

  message.className = result;
  message.innerText = text;
  document.body.append(message);

  if (error) {
    setTimeout(() => {
      message.remove();
    }, 2000);
  }
}

const successPromise = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

successPromise.then(() => {
  createMessage('message', 'Promise was resolved!');
});

errorPromise.catch(() => {
  createMessage('error-message', 'Promise was rejected!', 'error');
});

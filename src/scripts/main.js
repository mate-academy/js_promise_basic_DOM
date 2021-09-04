'use strict';

const message = document.createElement('div');
const messageError = document.createElement('div');

const firstPromise = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    const text = 'Promise was resolved!';

    message.classList.add('message');
    document.body.append(message);
    resolve(text);
  });
});

firstPromise.then((result) => {
  message.textContent = result;
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const text = 'Promise was rejected!';

    messageError.classList.add('message', 'error-message');
    document.body.append(messageError);
    reject(text);
  }, 3000);
});

secondPromise.catch((error) => {
  messageError.textContent = error;
});

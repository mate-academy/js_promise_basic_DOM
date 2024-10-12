'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (logo) {
    logo.addEventListener('click', () => {
      resolve();
    });
  } else {
    reject(new Error('Logo not found on the page'));
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error'));
  }, 3000);
});

const createMessage = (text, className = 'message') => {
  const message = document.createElement('div');

  message.classList.add(className);
  message.textContent = text;

  return message;
};

const insertMessageToDOM = (message) => {
  document.body.appendChild(message);
};

const successHandler = () => {
  const successMessage = createMessage('Promise was resolved!');

  insertMessageToDOM(successMessage);
};

const errorHandler = (error) => {
  const errormessage = createMessage(
    `Promise was rejected! ${error.message}`,
    'error-message',
  );

  insertMessageToDOM(errormessage);
};

Promise.race([promise1, promise2]).then(successHandler).catch(errorHandler);

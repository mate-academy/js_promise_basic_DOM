'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const createMessage = (classes, description) => {
  const message = document.createElement('div');

  message.className = classes;
  message.innerHTML = description;
  body.appendChild(message);

  return message;
};

logo.addEventListener('click', () => {
  const message = createMessage('message', 'Promise was resolved!');

  Promise.resolve(message);
});

setTimeout(() => {
  const message = createMessage(
    'message error-message',
    'Promise was rejected!'
  );

  Promise.reject(message);
}, 3000);

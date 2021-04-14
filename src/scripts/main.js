'use strict';

const logo = document.querySelector('.logo');

const createMessage = (classes, description) => {
  const message = document.createElement('div');

  message.className = classes;
  message.innerHTML = description;
  document.body.appendChild(message);

  return message;
};

new Promise((resolve, reject) => {
  logo.addEventListener('click', (e) => {
    resolve();
  });
})
  .then(() => {
    createMessage('message', 'Promise was resolved!');
  });

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
})
  .catch(() => {
    createMessage('message error-message', 'Promise was rejected!');
  });

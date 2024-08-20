'use strict';

const logo = document.querySelector('.logo');

function createNotification(message, error = false) {
  const div = document.createElement('div');

  div.classList.add('message');

  if (error) {
    div.classList.add('error-message');
  }

  div.textContent = message;
  document.body.append(div);
}

new Promise((resolve, reject) => {
  resolve('Promise was resolved!');
}).then((response) => {
  logo.addEventListener('click', () => {
    createNotification(response);
  });
});

new Promise((resolve, reject) => {
  setTimeout(reject, 3000, 'Promise was rejected!');
}).catch((error) => {
  createNotification(error, true);
});

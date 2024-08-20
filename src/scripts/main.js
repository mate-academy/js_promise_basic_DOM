'use strict';
const logo = document.querySelector('.logo');

function createNotification(message, error = false) {
  const div = document.createElement('div');
    div.classList.add('message');

  if (error) {
    div.classList.add('message', 'error-message');
    div.textContent = message;
    document.body.append(div);
  } else {
    div.textContent = message;
    document.body.append(div);
  }
}

const promise1 = new Promise((resolve) => {
  resolve('Promise was resolved!');
}).then((response) => {
  logo.addEventListener('click', () => {
    createNotification(response);
  });
});

const promise2 = new Promise((_, reject) => {
  setTimeout(reject, 3000, 'Promise was rejected!');
}).catch((error) => {
  createNotification(error, true);
});

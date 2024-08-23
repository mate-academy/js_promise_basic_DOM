'use strict';

function createMessage(errorMessage = '') {
  const div = document.createElement('div');

  div.classList.add('message');

  if (errorMessage === '') {
    div.textContent = 'Promise was resolved!';
  } else {
    div.textContent = errorMessage;
    div.classList.add('error-message');
  }

  document.body.appendChild(div);
}

const p1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

p1.then(() => {
  createMessage();
}).catch((error) => {
  createMessage(error.message);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 2000);
});

p2.catch((error) => {
  createMessage(error.message);
});

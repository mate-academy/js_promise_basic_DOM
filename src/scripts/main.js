'use strict';

function addElements(message, error = false) {
  const div = document.createElement('div');

  div.className = !error ? 'message' : 'message error-message';
  div.textContent = message;
  document.body.appendChild(div);
}

const promiseOne = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promiseOne
  .then((message) => {
    addElements(message);
  })
  .catch((error) => {
    addElements(error, true);
  });

promiseTwo
  .then((message) => {
    addElements(message);
  })
  .catch((error) => {
    addElements(error, true);
  });

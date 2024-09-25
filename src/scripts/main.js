'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const appendMessage = (message, className) => {
  const div = document.createElement('div');

  if (className) {
    div.classList.add(className);
  }

  div.classList.add('message');
  div.textContent = message;
  document.body.appendChild(div);
};

const successHandler = (message) => {
  appendMessage(message);
};

const errorHandler = (error) => {
  appendMessage(error.message, 'error-message');
};

promise1
  .then((message) => {
    successHandler(message);
  })
  .catch((error) => {
    errorHandler(error);
  });

promise2
  .then((message) => {
    successHandler(message);
  })
  .catch((error) => {
    errorHandler(error);
  });

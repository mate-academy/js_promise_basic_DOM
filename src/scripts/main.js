'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.onclick = resolve;
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

const successHandler = () => {
  const message = document.createElement('div');

  message.className = 'message';

  message.textContent = 'Promise was resolved!';

  document.body.append(message);
};

const errorHandler = () => {
  const errorMessage = document.createElement('div');

  errorMessage.className = 'message error-message';

  errorMessage.textContent = 'Promise was rejected!';

  document.body.append(errorMessage);
};

promise1.then(successHandler, errorHandler);
promise2.then(successHandler, errorHandler);

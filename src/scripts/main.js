'use strict';

// write your code here
const logo = document.querySelector('.logo');

const showMessage = (text, isError = false) => {
  const message = document.createElement('div');

  message.className = 'message';

  if (isError) {
    message.classList.add('error-message');
  }

  message.textContent = text;
  document.body.append(message);
};

const successHandler = () => {
  showMessage('Promise was resolved!');
};

const errorHandler = () => {
  showMessage('Promise was rejected!', true);
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1.then(successHandler, errorHandler);
promise2.then(successHandler, errorHandler);

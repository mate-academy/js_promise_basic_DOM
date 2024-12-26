'use strict';

// write your code here
const logoButton = document.querySelector('.logo');

const successHandler = () => {
  const message = document.createElement('div');

  message.setAttribute('class', 'message');
  message.textContent = 'Promise was resolved!';

  document.body.append(message);
};

const errorHandler = () => {
  const message = document.createElement('div');

  message.setAttribute('class', 'message error-message');
  message.textContent = 'Promise was rejected!';

  document.body.append(message);
};

const promise1 = new Promise((resolve, reject) => {
  logoButton.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise was rejected!');
  }, 3000);
});

promise1.then(successHandler).catch(errorHandler);

promise2.then(successHandler).catch(errorHandler);

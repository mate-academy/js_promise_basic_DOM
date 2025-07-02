'use strict';

const promise1 = new Promise((resolve) => {
  const logoElement = document.querySelector('.logo');

  logoElement.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('falled'));
  }, 3000);
});

const success = () => {
  const divElement = document.createElement('div');

  divElement.className = 'message';
  divElement.textContent = 'Promise was resolved!';
  document.body.appendChild(divElement);
};

const error = () => {
  const divElement = document.createElement('div');

  divElement.className = 'message error-message';
  divElement.textContent = 'Promise was rejected!';
  document.body.appendChild(divElement);
};

promise1.then(success).catch(error);
promise2.then(success).catch(error);

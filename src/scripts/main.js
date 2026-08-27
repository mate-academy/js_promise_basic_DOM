'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const showErrorMessage = () => {
  const message = document.createElement('div');

  message.classList.add('message', 'error-message');

  message.innerText = 'Promise was rejected!';

  document.body.append(message);
};

const showSuccesMessage = () => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.innerText = 'Promise was resolved!';

  document.body.append(message);
};

promise1.then(showSuccesMessage);
promise1.catch(showErrorMessage);

promise2.then(showSuccesMessage);
promise2.catch(showErrorMessage);

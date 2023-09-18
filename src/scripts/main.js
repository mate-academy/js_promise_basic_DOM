'use strict';

// write your code here
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

promise1
  .then(
    (result) => {
      const message = document.createElement('div');

      message.classList.add('message');
      message.innerHTML = result;
      document.body.append(message);
    }
  );

promise2
  .catch(
    (error) => {
      const errorMessage = document.createElement('div');

      errorMessage.classList.add('error-message');
      errorMessage.innerHTML = error;
      document.body.append(errorMessage);
    }
  );

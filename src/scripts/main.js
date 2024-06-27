'use strict';

const promise1 = new Promise(function (resolve) {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const handlerSuccess = () => {
  const successMassage = document.createElement('div');

  successMassage.classList.add('message');
  successMassage.textContent = 'Promise was resolved!';
  document.body.appendChild(successMassage);
};

const handlerError = (error) => {
  const errorMassage = document.createElement('div');

  errorMassage.classList.add('message', 'error-message');
  errorMassage.textContent = error;
  document.body.appendChild(errorMassage);
};

Promise.race([promise1, promise2]).then(handlerSuccess).catch(handlerError);

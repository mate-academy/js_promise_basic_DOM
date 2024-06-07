'use strict';

const logo = document.querySelector('.logo');

const errorHandler = (response) => {
  const divBlock = document.createElement('div');

  divBlock.classList.add('message', 'error-message');

  divBlock.textContent = response.message;
  document.body.append(divBlock);
};

const successHandler = (response) => {
  const divBlock = document.createElement('div');

  divBlock.classList.add('message');

  divBlock.textContent = response;
  document.body.append(divBlock);
};

const promiseHandler = () => {
  const promise1 = new Promise((resolve) => {
    resolve('Promise was resolved!');
  });

  promise1
    .then((response) => {
      successHandler(response);
    })
    .catch((response) => errorHandler(response));
};

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

logo.addEventListener('click', promiseHandler);

promise2
  .then((response) => {
    successHandler(response);
  })

  .catch((response) => errorHandler(response));

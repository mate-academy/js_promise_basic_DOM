'use strict';

const logo = document.querySelector('.logo');

logo.addEventListener('click', (e) => {
  const logoEL = e.target.closest('.logo');

  if (!logoEL) {
    return;
  }

  e.preventDefault();

  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('true'); // просто сигналізуємо, що проміс успішний
    }, 1000);
  });

  promise1
    .then((value) => {
      const message = document.createElement('div');

      message.classList.add('message');
      message.textContent = 'Promise was resolved!';

      document.body.append(message);
    })
    .catch((error) => {
      return error;
    });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

promise2
  .then((value) => {})
  .catch(() => {
    const errorMessage = document.createElement('div');

    errorMessage.classList.add('message');
    errorMessage.classList.add('error-message');

    document.body.append(errorMessage);
  });

// setTimeout(() => {
//   const errorMessage = document.createElement('div');
//
//   errorMessage.classList.add('message');
//   errorMessage.classList.add('error-message');
//   errorMessage.textContent = 'Promise was rejected!';
//
//   document.body.append(errorMessage);
// }, 3000);

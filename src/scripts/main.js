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

  promise1.then((value) => {
    const message = document.createElement('div');

    message.classList.add('message');
    message.textContent = 'Promise was resolved!';

    document.body.append(message);
  });
});

const pronise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('true');
  }, 3000);
});

pronise2
  .then((value) => {
    const errorMessage = document.createElement('div');

    errorMessage.classList.add('message');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Promise was rejected!';

    document.body.append(errorMessage);
  })
  .catch((error) => {
    return error;
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

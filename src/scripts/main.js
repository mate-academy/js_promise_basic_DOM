'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    const successMessage = `<div class="message">
      <p>Promise was resolved!</p>
    </div>`;

    resolve(successMessage);
  });
});

promise1.then((successMessage) => {
  document.body.insertAdjacentHTML('beforeend', successMessage);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const errorMessage = `<div class="message error-message">
      <p>Promise was rejected!</p>
    </div>`;

    reject(errorMessage);
  }, 3000);
});

promise2.catch((errorMessage) => {
  document.body.insertAdjacentHTML('beforeend', errorMessage);

  const message = document.querySelector('.message.error-message');

  setTimeout(() => {
    if (message) {
      message.remove();
    }
  }, 3000);
});

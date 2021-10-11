'use strict';

const logo = document.querySelector('.logo');

const throwMessage = (text, errClass = '') => {
  const maskMessage = `
    <div class="message ${errClass}">
      <p>${text}</p>
    </div>
  `;

  document.body.insertAdjacentHTML('afterend', maskMessage);
};

const promiseResolved = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promiseRejected = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
  });
});

promiseResolved.then((result) => throwMessage(result));
promiseRejected.catch((err) => throwMessage(err, 'error-message'));

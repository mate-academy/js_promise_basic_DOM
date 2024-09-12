'use strict';

const logoRef = document.querySelector('.logo');
const htmlBody = document.body;

const promise1 = new Promise(resolve => {
  logoRef.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1
  .then(data => {
    htmlBody.insertAdjacentHTML('beforeend',
      `
      <div class="message">${data}</div>
    `
    );
  })
  .catch(() => {
    htmlBody.insertAdjacentHTML('beforeend',
      `
      <div class="error-message">Promise was rejected!</div>
    `
    );
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise was rejected!');
  }, 3000);
});

promise2
  .then(() => {
    htmlBody.insertAdjacentHTML('beforeend',
      `
      <div class="message">Promise was resolved!</div>
    `
    );
  })
  .catch(data => {
    htmlBody.insertAdjacentHTML('beforeend',
      `
      <div class="error-message">${data}</div>
    `
    );
  });

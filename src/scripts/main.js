'use strict';

const logo = document.querySelector('.logo');

new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(`Promise was resolved!`);
  });
}).then((message) => {
  logo.insertAdjacentHTML('afterend', `<div class="message">${message}</div>`);
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error(`Promise was rejected!`));
  }, 3000);
}).catch((error) => {
  logo.insertAdjacentHTML(
    'afterend',
    `<div class="message error-message">${error}</div>`,
  );
});

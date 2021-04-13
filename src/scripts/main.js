'use strict';

const logo = document.querySelector('.logo');
const errorMessage = 'Promise was rejected!';
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    (logo.insertAdjacentHTML('beforebegin', `
      <div class="message">Promise was resolved!</div>`));
    resolve(errorMessage);
  });
});

promise1.then((error) => {
  setTimeout(() => {
    Promise.reject(logo.insertAdjacentHTML('beforebegin', `
      <div class="message error-message">${error}</div>`));
  }, 3000);
});

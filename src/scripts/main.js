'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', function(e) {
    resolve();
  });
});

promise1.then(() => {
  document.body.insertAdjacentHTML('beforeend', `
  <div class="message">Promise was resolved!</div>`);
}).catch(warn => alert(warn));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

promise2.catch(() => {
  document.body.insertAdjacentHTML('beforeend', `
  <div class="message error-message">Promise was rejected!</div>`);
});

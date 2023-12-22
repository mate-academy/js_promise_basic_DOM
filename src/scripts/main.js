'use strict';

const promise1 = new Promise(function(resolve, reject) {
  document.getElementById('.logo').addEventListener('click', resolve());
});

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject(new Error('error'));
  }, 3000);
});

promise1.then(() => {
  document.body.insertAdjacentHTML('beforeend', `
  <div class="message error-message">
  Promise was resolved!
</div>`);
});

promise2.catch(() => {
  document.body.insertAdjacentHTML('beforeend', `
  <div class="message error-message">
  Promise was rejected!
</div>`);
});

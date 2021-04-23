'use strict';

const logo = document.querySelector('.logo');

new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
})
  .then(() => showMessage('resolved'));

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 2999);
})
  .catch(() => showMessage('rejected', 'error-message'));

function showMessage(promiseStatus, className = '') {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="message ${className}">
      Promise was ${promiseStatus}!
    </div>
  `);
}

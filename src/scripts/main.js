'use strict';

const button = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  button.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

function showMessage(message, type = 'success') {
  document.body.insertAdjacentHTML('beforeend', `
  <div
    class="message
    ${type === 'error' ? 'error-message' : ''}"
  >
    ${message}
  </div>
`);
}

promise1.then(res => {
  showMessage(res);
});

promise2.catch(err => {
  showMessage(err.message, 'error');
});

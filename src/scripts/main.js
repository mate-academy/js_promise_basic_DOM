'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo')
    .addEventListener('click', () => {
      resolve();
    });
});

promise1
  .then(() => addDivMessage('resolved'))
  .catch(() => {});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

promise2.catch(() => addDivMessage('rejected'));

function addDivMessage(status) {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="message ${status === 'rejected' ? 'error-message' : ''}">
      Promise was ${status}!
    </div>
  `);
}

'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('success');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error'));
  }, 3000);
});

promise1.then((result) => {
  const message = createMessage(result);

  document.body.insertAdjacentHTML('beforeend', message);
});

promise2.catch((error) => {
  const message = createMessage(error.message);

  document.body.insertAdjacentHTML('beforeend', message);
});

function createMessage(result) {
  return `
    <div class="${result === 'error' ? 'error-' : ''}message">
      Promise was ${result === 'success' ? 'resolved' : 'rejected'}!
    </div>
  `;
}

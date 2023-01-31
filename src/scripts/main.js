'use strict';

window.addEventListener('DOMContentLoaded', () => {
  function createMessage(className, message) {
    return `
      <div class=${className}>
        ${message}
      </div>
    `;
  }

  const logo = document.querySelector('.logo');

  const promise1 = new Promise(resolve => {
    logo.addEventListener('click', resolve);
  });
  const promise2 = new Promise((resolve, reject) => setTimeout(reject, 3000));

  promise1
    .then(() => {
      document.body.insertAdjacentHTML('beforeend', createMessage(
        'message',
        'Promise was resolved!'
      ));
    });

  promise2
    .catch(() => {
      document.body.insertAdjacentHTML('beforeend', createMessage(
        'error-message',
        'Promise was rejected!'
      ));
    });
});

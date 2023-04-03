'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1
  .then(resolveHandler)
  .catch(rejectHandler);

promise2
  .then(resolveHandler)
  .catch(rejectHandler);

function resolveHandler() {
  const success = document.createElement('div');

  success.innerHTML = `
    <div class="message">
      Promise was resolved!
    </div>
  `;

  document.body.append(success);
}

function rejectHandler() {
  const error = document.createElement('div');

  error.innerHTML = `
    <div class="error-message">
      Promise was rejected!
    </div>
  `;

  document.body.append(error);
}

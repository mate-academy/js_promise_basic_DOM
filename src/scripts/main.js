'use strict';

const promise1 = new Promise(function (resolve, reject) {
  // eslint-disable-next-line no-shadow
  document.getElementById('logo').addEventListener('click', function (event) {
    if (event.button === 0) {
      resolve();
    }
  });
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

promise1.then(() => {
  document.body.insertAdjacentHTML(
    'beforeend',
    `
      <div class="message">
        Promise was resolved!
      </div>
    `,
  );
});

promise2.catch(() => {
  document.body.insertAdjacentHTML(
    'beforeend',
    `
      <div class="message error-message">
        Promise was rejected!
      </div>
    `,
  );
});

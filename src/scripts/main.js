'use strict';

function createPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject();
    }, 3000);
  });
}
const promise2 = createPromise();

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    resolve();
  });
});

promise1.then((result) => {
  document.body.insertAdjacentHTML(
    'beforeend', `<div class='message'>
                    Promise was resolved!
                  </div>`
  );
}, null);

promise2.then(null, () => {
  document.body.insertAdjacentHTML(
    'beforeend', `<div class='message error-message'>
                    Promise was rejected!
                  </div>`
  );
});

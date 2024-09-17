'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 100);
});

promise1.then((result) => {
  document.body.insertAdjacentHTML(
    'beforeend', `<div class='message'>
                    Promise was resolved!
                  </div>`
  );
}, null);

promise2.catch(error => {
  document.body.insertAdjacentHTML(
    'beforeend', `<div class='message error-message'>
                    ${error.message}
                  </div>`
  );
});

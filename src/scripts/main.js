'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(success => {
  document.body.insertAdjacentHTML(
    'beforeend', `<div class='message'>
                    Promise was resolved!
                  </div>`
  );
});

promise2.catch(error => {
  document.body.insertAdjacentHTML(
    'beforeend', `<div class='message error-message'>
                    ${error.message}
                  </div>`
  );
});

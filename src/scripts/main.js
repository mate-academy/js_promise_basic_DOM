'use strict';

const logo = document.querySelector('.logo');

function success() {
  const div = `
    <div class="message">
      Promise was resolved!
    </div>`;

  document.body.innerHTML += div;
}

function error(massage) {
  const div = `
    <div class="message error-message">
      ${massage}
    </div>`;

  document.body.innerHTML += div;
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('CKICK');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(() => {
    success();
  })
  .catch((err) => {
    error(err.message);
  });

promise2.catch((err) => {
  error(err.message);
});

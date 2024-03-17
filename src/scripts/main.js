'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then((result) => {
  document.body.insertAdjacentHTML('beforeend', `
    <div class='message'>${result}</div>
  `);
}
);

promise2.catch((error) => {
  document.body.insertAdjacentHTML('beforeend', `
    <div class='error-message'>${error}</div>
  `);
}
);

'use strict';

const promise1 = new Promise(function(resolve, reject) {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error()), 3000);
});

const outcomeHandler = (className, outcome) => {
  document.body.insertAdjacentHTML('beforeend',
    `<div class="${className}">
      Promise was ${outcome}!
    </div>`);
};

const thenAndCatch = (promise) => {
  promise
    .then(() => {
      outcomeHandler('message', 'resolved');
    })
    .catch(() => {
      outcomeHandler('error-message', 'rejected');
    });
};

thenAndCatch(promise1);
thenAndCatch(promise2);

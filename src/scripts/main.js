'use strict';

function message(isReolve) {
  const divEl = document.createElement('div');

  divEl.classList.add('message');

  divEl.textContent = isReolve
    ? 'Promise was resolved!'
    : 'Promise was rejected!';

  if (!isReolve) {
    divEl.classList.add('error-message');
  }

  document.body.appendChild(divEl);
}

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (logo) {
    logo.addEventListener('click', () => {
      resolve(true);
    });
  } else {
    reject(new Error('Logo is not find'));
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timeout'));
  }, 3000);
});

promise1.then((result) => message(result)).catch(() => message(false));
promise2.then((result) => message(result)).catch(() => message(false));

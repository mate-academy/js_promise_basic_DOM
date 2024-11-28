'use strict';

function showMessage(message, isError = false) {
  const div = document.createElement('div');

  div.textContent = message;
  div.classList.add('message');

  if (isError) {
    div.classList.add('error-message');
  }

  document.body.appendChild(div);
}

const logo = document.querySelector('.logo');

logo.style.cursor = 'pointer';

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', (e) => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then((value) => {
  showMessage(value);
});

promise2.catch((e) => {
  showMessage(e.message, true);
});

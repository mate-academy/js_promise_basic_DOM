'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  if (logo) {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function showMessage(result, isError = false) {
  const div = document.createElement('div');

  div.className = 'message';

  if (isError) {
    div.classList.add('error-message');
  }

  div.textContent = result;
  document.body.append(div);
}

promise1.then(showMessage).catch((error) => showMessage(error.message, true));
promise2.then(showMessage).catch((error) => showMessage(error.message, true));

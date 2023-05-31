'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

logo.addEventListener('click', () => {
  const promise1 = Promise.resolve('Promise was resolved!');
  const promise2 = Promise.reject(new Error('Promise was rejected!'));

  promise1.then((resolve) => {
    const div = document.createElement('div');

    div.className = 'message';
    div.textContent = resolve;
    body.append(div);
  });

  promise2.catch((reject) => {
    const div = document.createElement('div');

    div.classList = 'message error-message';
    div.textContent = reject;
    body.append(div);
  });
});

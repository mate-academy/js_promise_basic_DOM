'use strict';

const body = document.querySelector('body');
const addMessage = (success = true, additionalClass) => {
  const div = document.createElement('div');

  div.classList.add('message');

  if (additionalClass) {
    div.classList.add(additionalClass);
  }

  div.innerText = success ? 'Promise was resolved!' : 'Promise was rejected!';
  body.append(div);
};

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve());
});
const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise1.then(
  () => addMessage(true),
  () => addMessage(false, 'error-message'),
);

promise2.then(
  () => addMessage(true),
  () => addMessage(false, 'error-message'),
);

'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise(function (resolve) {
  logo.addEventListener('click', () => {
    resolve(['message', 'Promise was resolved!']);
  });
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

function addMessage([className, message]) {
  const div = document.createElement('div');

  div.classList.add('message');

  if (className === 'error-message') {
    div.classList.add(className);
  }
  div.textContent = message;
  body.append(div);
}

promise1.then(addMessage);

promise2.catch(() => addMessage(['error-message', 'Promise was rejected!']));

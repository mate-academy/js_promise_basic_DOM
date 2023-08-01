'use strict';

const body = document.querySelector('body');

const promise1 = new Promise(firstCallback);

function firstCallback(resolved, rejected) {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolved();
  });
}

const promise2 = new Promise(secondCallback);

function secondCallback(resolved, rejected) {
  setTimeout(rejected, 3000);
};

promise1.then(() => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.innerText = 'Promise was resolved!';

  body.append(message);
});

promise2.catch(() => {
  const message = document.createElement('div');

  message.classList.add('error-message');
  message.innerText = 'Promise was rejected!';

  body.append(message);
});

'use strict';

const logo = document.querySelector('.logo');

const message = document.createElement('div');

message.classList.add('message');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    const resolvedValue = 'Promise was resolved!';

    resolve(resolvedValue);
  });
});

promise1.then((resolvedValue) => {
  message.innerText = resolvedValue;
  document.body.appendChild(message);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rejectedValue = 'Promise was rejected!';

    reject(rejectedValue);
  }, 3000);
});

promise2.catch((rejectedValue) => {
  message.classList.add('error-message');

  message.innerText = rejectedValue;
  document.body.appendChild(message);
});

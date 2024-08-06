'use strict';

const logo = document.querySelector('.logo');

const msg = document.createElement('div');

msg.classList.add('message');
msg.style.display = 'none';

const text = document.createElement('p');

msg.appendChild(text);

document.body.appendChild(msg);

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then((message) => {
  msg.style.display = 'block';
  text.textContent = message;
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch((message) => {
  msg.classList.add('error-message');
  msg.style.display = 'block';
  text.textContent = message;
});

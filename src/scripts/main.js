'use strict';

const pushNotification = (title, type) => {
  const message = document.createElement('div');
  const classes = type.split(' ');

  message.classList.add(...classes);
  message.textContent = title;

  document.body.append(message);
};

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  pushNotification('Promise was resolved!', 'message');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.then().catch(() => {
  pushNotification('Promise was rejected!', 'message error-message');
});

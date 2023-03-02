'use strict';

const logo = document.querySelector('.logo');
const notification = document.createElement('div');

logo.addEventListener('click', () => {
  const promise1 = new Promise((resolve) => {
    resolve();
  });

  promise1.then(() => {
    notification.classList = 'message';
    notification.innerText = 'Promise was resolved!';
    document.body.append(notification);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise2.catch(() => {
  notification.classList = 'message';
  notification.classList.add('error-message');
  notification.innerText = 'Promise was rejected!';
  document.body.append(notification);
});

'use strict';

// write your code here
const elementLogo = document.querySelector('.logo');
const notification = document.createElement('div');

notification.classList = 'message';

elementLogo.addEventListener('click', () => {
  const promise1 = new Promise((resolve) => {
    resolve();
  });

  promise1.then(() => {
    notification.innerText = `Promise was resolved`;
    notification.classList.remove('error-message');
    document.body.append(notification);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise2.catch(() => {
  notification.classList.add('error-message');
  notification.innerText = `Promise was rejected`;
  document.body.append(notification);
});

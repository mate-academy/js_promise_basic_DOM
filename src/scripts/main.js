'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

const message = (type) => {
  const notification = document.createElement('div');

  notification.classList = 'message';

  if (type === 'suxess') {
    notification.textContent = 'Promise was resolved!';

    return document.body.appendChild(notification);
  } else if (type === 'error') {
    notification.classList.add('error-message');
    notification.textContent = 'Promise was rejected!';

    return document.body.appendChild(notification);
  }
};

promise1.then(() => {
  message('suxess');
}).catch(() => {
  message('error');
});

promise2.then(() => {
  message('suxess');
}).catch(() => {
  message('error');
});

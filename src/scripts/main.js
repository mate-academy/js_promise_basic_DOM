'use strict';

// write your code here
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function createNotification(type, textMessage) {
  const notification = document.createElement('div');

  notification.className = type;
  notification.textContent = textMessage;
  body.append(notification);
}

logo.addEventListener('click', () => {
  const promise1 = new Promise((resolve, reject) => {
    resolve();
  });

  promise1
    .then(() => {
      createNotification('message', 'Promise was resolved!');
    })
    .catch(() => {
      createNotification('error', 'Promise was rejected!');
    });
});

const promise2 = new Promise(function (resolve, reject) {
  reject(new Error());
});

promise2.catch(() => {
  setTimeout(() => {
    createNotification('error', 'Promise was rejected!');
  }, 3000);
});

'use strict';

const logo = document.querySelector('.logo');

function addNotification(message, className) {
  const notification = document.createElement('div');

  notification.className = className;
  notification.innerText = message;
  document.body.append(notification);
}

const resolvePromise = new Promise(function(resolve) {
  logo.addEventListener('click', () => {
    resolve();
  });
});

resolvePromise.then(() => {
  addNotification('Promise was resolved!', 'message');
});

const rejectPromise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

rejectPromise.catch(() => {
  addNotification('Promise was rejected!', 'error-message message');
});

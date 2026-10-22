'use strict';

const logo = document.querySelector('.logo');

function showErrorNotification() {
  const notification = document.createElement('div');

  notification.textContent = 'Promise was rejected!';
  notification.classList.add('message', 'error-message');
  document.body.append(notification);
}

function showSuccessNotification() {
  const notification = document.createElement('div');

  notification.textContent = 'Promise was resolved!';
  notification.classList.add('message');
  document.body.append(notification);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise1.then(showSuccessNotification).catch(showErrorNotification);
promise2.then(showSuccessNotification).catch(showErrorNotification);

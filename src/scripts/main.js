'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

logo.style.cursor = 'pointer';

const makeNotification = (text, notificationClass = '') => {
  const notification = document.createElement('div');

  notification.className = 'message ' + notificationClass;
  notification.innerText = text;

  return body.append(notification);
};

new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
}).then(value => makeNotification(value));

new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Error: Promise was rejected!')), 3000);
}).catch(value => makeNotification(value, 'error-message'));

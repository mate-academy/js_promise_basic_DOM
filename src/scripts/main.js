'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const makeNotification = (text, notificationClass = '') => {
  const notification = document.createElement('div');

  notification.className = 'message ' + notificationClass;
  notification.innerText = text;

  return body.append(notification);
};

new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!', 'resolved');
  });
}).then(result => makeNotification(result));

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
}).catch(result => makeNotification(result, 'error-message'));

'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve({
      messageType: 'message',
      message: 'Promise was resolved!',
    });
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line
    reject({
      messageType: 'error-message',
      message: 'Promise was rejected!',
    });
  }, 3000);
});

function showMessage(messageType, message) {
  const body = document.querySelector('body');
  const notification = document.createElement('div');

  notification.classList.add(messageType);
  notification.innerText = message;
  body.append(notification);
}

promise1
  .then(({ messageType, message }) => {
    showMessage(messageType, message);
  });

promise2
  .catch(({ messageType, message }) => {
    showMessage(messageType, message);
  });

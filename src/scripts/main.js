'use strict';

const rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const logo = document.querySelector('.logo');

const resolvedPromise = new Promise((resolve, reject) => {
  logo.onclick = () => {
    resolve('Promise was resolved!');
  };
});

resolvedPromise
  .then((result) => {
    pushNotification('message', result);
  });

rejectedPromise
  .catch((error) => {
    pushNotification('message error-message', error.message);
  });

function pushNotification(className, message) {
  const msg = document.createElement('div');

  msg.className = className;
  msg.innerText = message;
  document.body.appendChild(msg);
}

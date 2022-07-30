'use strict';

const pushNotification = (description, type) => {
  const div = document.createElement('div');

  div.classList.add(type);
  div.innerHTML = `<p>${description}</p>`;
  div.style.top = `10px`;
  div.style.right = `10px`;
  document.body.append(div);
};

const button = document.querySelector('.logo');
const promiseResolve = new Promise((resolve, reject) => {
  button.addEventListener('click', () => {
    resolve('Clicked');
  });
});

const promiseReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

promiseResolve
  .then(() => {
    pushNotification('Promise was resolved!', 'message');
  });

promiseReject
  .catch(() => {
    pushNotification('Promise was rejected!', 'error-message');
  });

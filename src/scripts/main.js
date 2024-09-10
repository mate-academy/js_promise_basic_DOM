'use strict';

const pushNotification = (title, type) => {
  const message = document.createElement('div');
  const elementTitle = document.createElement('h2');

  elementTitle.innerHTML = title;
  message.setAttribute('class', type);
  document.body.append(message);
  message.append(elementTitle);
};

const promise1 = new Promise(function (resolve, reject) {
  resolve();
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise2.catch(() => {
  pushNotification('Promise was rejected!', 'message error-message');
});

document.addEventListener('click', (e) => {
  const logo = e.target.closest('.logo');

  if (!logo) {
    return;
  }

  promise1.then(() => {
    pushNotification('Promise was resolved!', 'message');
  });
});

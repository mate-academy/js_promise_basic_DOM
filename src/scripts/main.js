'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const onSuccess = () => {
  const msg = document.createElement('div');

  msg.className = 'message';
  msg.textContent = 'Promise was resolved!';
  document.body.appendChild(msg);
};

const onError = () => {
  const msg = document.createElement('div');

  msg.className = 'message error-message';
  msg.textContent = 'Promise was rejected!';
  document.body.appendChild(msg);
};

promise1.then(onSuccess).catch(onError);

promise2
  .then(() => {})

  .catch((error) => {
    const msg = document.createElement('div');

    msg.className = 'message error-message';
    msg.textContent = error.message;
    document.body.appendChild(msg);
  });
// write your code here

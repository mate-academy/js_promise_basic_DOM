'use strict';

const resolved = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', (e) => {
    resolve('Promise was resolved!');
  });
});

resolved.then((message) => {
  const resolveAlert = document.createElement('div');

  resolveAlert.classList.add('message');
  resolveAlert.innerText = `${message}`;
  document.body.insertAdjacentElement('beforebegin', resolveAlert);
});

const rejected = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error('Promise was rejected'));
  }, 3000);
});

rejected.catch((message) => {
  const rejectAlert = document.createElement('div');

  rejectAlert.classList.add('error-message', 'message');
  rejectAlert.innerText = `${message}`;
  document.body.insertAdjacentElement('beforebegin', rejectAlert);
});

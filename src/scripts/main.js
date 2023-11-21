'use strict';

const logo = document.body.getElementsByClassName('logo')[0];

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

const isSuccess = () => {
  const created = document.createElement('div');

  created.className = 'message';
  created.innerText = 'Promise was resolved';
  document.body.appendChild(created);
};

const isFailed = () => {
  const created = document.createElement('div');

  created.className = 'message error-message';
  created.innerText = 'Promise was rejected!';
  document.body.appendChild(created);
};

promise1
  .then(isSuccess)
  .catch(isFailed);

promise2
  .then(isSuccess)
  .catch(isFailed);

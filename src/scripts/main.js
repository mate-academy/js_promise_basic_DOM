'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const success = () => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.append(div);
};

const error = (err) => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = err.message;
  document.body.append(div);
};

promise1.then(success).catch(error);
promise2.then(success).catch(error);

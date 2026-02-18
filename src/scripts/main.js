'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  if (logo) {
    logo.addEventListener('click', () => {
      resolve();
    });
  } else {
    reject(new Error('no data'));
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

const resolved = () => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.append(div);
};

const rejected = () => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.append(div);
};

promise1.then(resolved).catch(rejected);
promise2.then(resolved).catch(rejected);

'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const good = document.createElement('div');
const bad = document.createElement('div');

good.className = 'message';
good.innerHTML = 'Promise was resolved!';

bad.className = 'error-message';
bad.innerHTML = 'Promise was rejected!';

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve(
      body.append(good)
    );
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error(body.append(bad))), 3000);
});

promise1.then();
promise2.then();

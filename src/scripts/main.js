'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const div = document.createElement('div');

const promise1 = new Promise(function(resolve, reject) {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(
    success => {
      div.className = 'message';
      div.textContent = success;

      body.append(div);
    }
  )
  .catch();

promise2
  .then()
  .catch(
    error => {
      div.classList.add('message', 'error-message');
      div.textContent = error;

      body.append(div);
    }
  );

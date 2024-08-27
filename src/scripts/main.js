'use strict';

const logoE = document.querySelector('.logo');
const notifE = document.createElement('div');
const success = notifE.cloneNode(true);
const error = notifE.cloneNode(true);

success.className = 'message';
success.innerText = 'Promise was resolved!';

error.className = 'message error-message';
error.innerText = 'Promise was rejected!';

const promise1 = new Promise((resolve) => {
  logoE.addEventListener('click', (e) => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

promise1.then(() => callback(success)).catch(() => callback(error));
promise2.then(() => callback(success)).catch(() => callback(error));

function callback(elem) {
  document.body.append(elem);
}

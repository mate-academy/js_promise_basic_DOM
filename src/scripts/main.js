'use strict';

const logo = document.querySelector('.logo');

const resolveDiv = document.createElement('div');

resolveDiv.className = 'message';
resolveDiv.innerText = 'Promise was resolved!';

const rejectDiv = document.createElement('div');

rejectDiv.className = 'message error-message';
rejectDiv.innerText = 'Promise was rejected!';

logo.addEventListener('click', () => {
  return new Promise((resolve, reject) => {
    document.body.append(resolveDiv);
    resolve();
  })
    .then(() => {
      setTimeout(() => {
        return new Promise((resolve, reject) => {
          document.body.append(rejectDiv);
          reject(new Error('Promise was rejected!'));
        });
      }, 3000);
    });
});

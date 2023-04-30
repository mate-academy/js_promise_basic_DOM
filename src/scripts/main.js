'use strict';

const body = document.querySelector('body');
const successDiv = document.createElement('div');
const errorDiv = document.createElement('div');
const logo = document.querySelector('.logo');

successDiv.classList.add('message');
successDiv.innerText = 'Promise was resolved!';
errorDiv.classList.add('message');
errorDiv.classList.add('error-message');
errorDiv.innerText = 'Promise was rejected!';

logo.addEventListener('click', () => {
  return new Promise((resolve, reject) => {
    resolve(body.append(successDiv));

    setTimeout(() => {
      reject(body.append(errorDiv));
    }, 3000);
  });
});

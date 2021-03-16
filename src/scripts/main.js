'use strict';

// write your code here
const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const p = document.createElement('p');
const resolveMessage = 'Promise was resolved!';
const rejectMessage = 'Promise was rejected!';

const creatPromise = new Promise((resolve, reject) => {
  logo.onclick = () => resolve(resolveMessage);
  setTimeout(() => reject(rejectMessage), 3000);
});

creatPromise
  .then(successCallback)
  .catch(failureCallback);

function successCallback(message) {
  p.className = 'message';
  p.textContent = message;
  body.append(p);
}

function failureCallback(error) {
  p.className = 'error-message';
  p.textContent = error;
  body.append(p);
}

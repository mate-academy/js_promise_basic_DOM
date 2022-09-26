'use strict';

const logo = document.getElementsByClassName('logo')[0];

function successMessage() {
  const newDiv = document.createElement('div');

  newDiv.classList.add('message');

  const newContent = document.createTextNode('Promise was resolved!');

  newDiv.appendChild(newContent);

  document.body.insertBefore(newDiv, logo);
}

function errorMessage() {
  const newDiv = document.createElement('div');

  newDiv.classList.add('error-message');

  const newContent = document.createTextNode('Promise was rejected!');

  newDiv.appendChild(newContent);

  document.body.insertBefore(newDiv, logo);
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve());
});

promise1.then(successMessage).catch(errorMessage);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Error for promise2')), 3000);
});

promise2.then(successMessage).catch(errorMessage);

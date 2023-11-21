'use strict';

const logo = document.querySelector('.logo');
const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => resolve());
});
const promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error()), 3000);
});

promise1
  .then(handleSucces)
  .catch(handleRejection);

promise2
  .then(handleSucces)
  .catch(handleRejection);

function handleSucces() {
  const newDiv = document.createElement('div');

  newDiv.innerText = 'Promise was resolved!';
  newDiv.classList.add('message');
  document.body.appendChild(newDiv);
}

function handleRejection() {
  const newDiv = document.createElement('div');

  newDiv.innerText = 'Promise was rejected!';
  newDiv.classList.add('message', 'error-message');
  document.body.appendChild(newDiv);
}

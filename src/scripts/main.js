'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const errorMessage = 'Promise was rejected!';
const succesMessage = 'Promise was resolved!';

function showMessage(message) {
  const divSuccess = document.createElement('div');

  divSuccess.classList.add('message');
  divSuccess.innerText = message;
  body.append(divSuccess);
}

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve(succesMessage);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(errorMessage);
  }, 3000);
});

promise1
  .then(
    (result) => {
      showMessage(result);
    });

promise2
  .catch(
    (result) => {
      showMessage(result);
    });

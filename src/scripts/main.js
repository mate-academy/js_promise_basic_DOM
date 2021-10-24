'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const errorMessage = ['message error-message', 'Promise was rejected!'];
const success = ['message', 'Promise was resolved!'];

function resultMessage(divClass, message) {
  body.insertAdjacentHTML('afterbegin', `
  <div class="${divClass}">
    ${message}
  </div>
  `);
};

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(success);
  });
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(errorMessage);
  }, 3000);
});

function fullResult(result) {
  resultMessage(result[0], result[1]);
}

promise1
  .then(fullResult)
  .catch(fullResult);

promise2
  .then(fullResult)
  .catch(fullResult);

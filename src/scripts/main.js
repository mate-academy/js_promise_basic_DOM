'use strict';

const promise1 = new Promise((resolve, reject) =>{
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) =>{
  setTimeout(() => {
    reject(Error('Promise was rejected!'));
  }, 3000)
});

promise1
  .then(onSuccesMessage)
  .catch(onErrorMessage);

promise2
  .then(onSuccesMessage)
  .catch(onErrorMessage);

function onSuccesMessage() {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(messageDiv);
}

function onErrorMessage() {
  const errorMessage = document.createElement('div');

  errorMessage.className = 'error-message';
  errorMessage.textContent = 'Promise was rejected!';
  document.body.append(errorMessage);
}

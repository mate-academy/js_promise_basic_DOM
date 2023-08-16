'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise2 was rejected after 3 seconds'));
  }, 3000);
});

function successPromise(data) {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = data || 'Promise was resolved';
  document.body.appendChild(messageDiv);
}

function errorPromise(error) {
  const errorMessage = document.createElement('div');

  errorMessage.className = 'message error-message';
  errorMessage.textContent = error || 'Promise was rejected';
  document.body.append(errorMessage);
}

promise1.then((data) => {
  successPromise(data);
})
  .catch((error) => {
    errorPromise(error);
  });

promise2.then((data) => {
  successPromise(data);
})
  .catch((error) => {
    errorPromise(error);
  });

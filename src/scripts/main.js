'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

const successHadler = () => {
  const successMessage = document.createElement('div');

  successMessage.className = 'message';
  successMessage.textContent = 'Promise was resolved!';
  document.body.appendChild(successMessage);
};

const errorHadler = () => {
  const errorMessage = document.createElement('div');

  errorMessage.className = 'message error-message';
  errorMessage.textContent = 'Promise was rejected!';
  document.body.appendChild(errorMessage);
};

promise1.then(successHadler).catch(errorHadler);
promise2.then(successHadler).catch(errorHadler);

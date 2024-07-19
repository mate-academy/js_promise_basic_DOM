'use strict';

// write your code here
const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

const handleSuccess = () => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';

  document.body.append(div);
};

const handleError = () => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';

  document.body.append(div);
};

promise1.then(handleSuccess).catch(handleError);

promise2.then(handleSuccess).catch(handleError);

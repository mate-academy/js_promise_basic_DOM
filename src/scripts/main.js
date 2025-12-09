'use strict';

const handleSuccsess = () => {
  const newDiv = document.createElement('div');

  newDiv.className = 'message';
  newDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(newDiv);
};

const handleReject = () => {
  const newDiv = document.createElement('div');

  newDiv.className = 'message error-message';
  newDiv.textContent = 'Promise was rejected!';
  document.body.appendChild(newDiv);
};

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(handleSuccsess).catch(handleReject);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Something went wrong'));
  }, 3000);
});

promise2.then(handleSuccsess).catch(handleReject);

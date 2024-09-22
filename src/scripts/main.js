'use strict';

const logo = document.querySelector('.logo');

logo.addEventListener('click', handleLogoClick);

function handleLogoClick() {
  const promise1 = new Promise((resolve) => {
    resolve('Promise was resolved!');
  });

  promise1.then((message) => {
    const succesDiv = document.createElement('div');

    succesDiv.className = 'message';
    succesDiv.textContent = message;
    document.body.appendChild(succesDiv);
  });
}

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch((error) => {
  const errorDiv = document.createElement('div');

  errorDiv.className = 'message error-message';
  errorDiv.textContent = error.message;
  document.body.appendChild(errorDiv);
});

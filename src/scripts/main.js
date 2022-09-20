'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

const handleSuccess = () => {
  const element = document.createElement('div');

  element.innerHTML = `
  <div class="message">
    Promise was resolved!
  </div>
  `;
  document.body.append(element);
};

const handleError = () => {
  const element = document.createElement('div');

  element.innerHTML = `
  <div class="error-message">
    Promise was rejected!
  </div>
  `;
  document.body.append(element);
};

promise1.then(handleSuccess, handleError);
promise2.then(handleSuccess, handleError);

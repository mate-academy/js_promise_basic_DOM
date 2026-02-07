'use strict';

const logo = document.querySelector('.logo');

function promise1() {
  return new Promise((resolve) => {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  });
}

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const showSuccess = (text) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = text;
  document.body.append(div);
};

const showError = (error) => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = error.message;
  document.body.append(div);
};

promise1().then(showSuccess).catch(showError);
promise2().then(showSuccess).catch(showError);

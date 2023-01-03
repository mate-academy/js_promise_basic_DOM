'use strict';

function success(result) {
  const div = document.createElement('div');

  div.className = 'message';
  div.innerText = 'Promise was resolved!';
  document.body.append(div);
};

function error(data) {
  const div = document.createElement('div');

  div.className = 'error-message';
  div.innerText = 'Promise was rejected!';
  document.body.append(div);
}

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

promise1
  .then(success)
  .catch(error);

promise2
  .then(success)
  .catch(error);

'use strict';

const createMessageDiv = () => {
  const div = document.createElement('div');

  div.className = 'message';

  return div;
};

const success = (result) => {
  const div = createMessageDiv();

  div.innerText = result;
  document.body.append(div);
};

const error = (result) => {
  const div = createMessageDiv();

  div.classList.add('error-message');
  div.innerText = result;
  document.body.append(div);
};

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(success).catch(error);
promise2.then(success).catch(error);

'use strict';

const logo = document.querySelector('.logo');

const resPromise = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const rejPromise = new Promise((resolve, reject) => {
  window.setTimeout(reject, 3000);
});

resPromise.then((prom) => {
  const newDiv = document.createElement('div');

  newDiv.innerText = prom;
  newDiv.classList.add('message');
  document.body.append(newDiv);
});

rejPromise.catch(() => {
  const newDiv = document.createElement('div');

  newDiv.innerText = 'Promise was rejected!';
  newDiv.className = 'message error-message';
  document.body.append(newDiv);
});

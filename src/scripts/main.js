'use strict';

// write your code here
const body = document.querySelector('body');

const success = () => {
  const div = document.createElement(`div`);

  div.classList.add('message');
  div.innerHTML = `Promise was resolved!`;
  body.appendChild(div);
};

const error = () => {
  const div = document.createElement(`div`);

  div.classList.add('error-message');
  div.innerHTML = `Promise was rejected!`;
  body.appendChild(div);
};

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector(`.logo`);

  logo.addEventListener(`click`, function() {
    resolve();
  });
});

promise1.then(el => {
  success();
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error(`rejected`)), 3000);
});

promise2.catch(el => error());

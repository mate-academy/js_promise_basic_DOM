'use strict';

const logo = document.querySelector(`.logo`);
const message = document.createElement(`div`);
const message2 = document.createElement(`div`);

const promise = new Promise((resolve, reject) => {
  message.className = `message`;
  message.textContent = `Promise was resolved!`;
  message2.className = `error-message`;
  message2.textContent = `Promise was rejected!`;

  logo.addEventListener(`click`, () => {
    resolve();
  });

  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise
  .then(() => {
    document.body.append(message);
  })
  .catch(() => {
    document.body.append(message2);
  });

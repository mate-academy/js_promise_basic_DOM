'use strict';

const logo = document.querySelector('.logo');

const waitForClick = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const waitForDelay = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

const addMessage = (type, message) => {
  const div = document.createElement('div');

  div.classList.add(type);
  div.innerText = message;

  document.body.appendChild(div);
};

waitForClick.then(() => {
  addMessage('message', `Promise was resolved!`);
}).catch(() => {
  addMessage('error-message', `Promise was rejected!`);
});

waitForDelay.then().catch(() => {
  addMessage('error-message', `Promise was rejected!`);
});

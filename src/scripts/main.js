'use strict';

function createMessage(text, className = 'message') {
  const div = document.createElement('div');

  div.classList = className;
  div.textContent = text;
  document.body.append(div);
}

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    if (e) {
      resolve(`Promise was resolved!`);
    }
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error(`Promise was rejected!`));
  }, 3000);
});

promise1.then((text) => {
  createMessage(text);
});

promise2.catch((text) => {
  createMessage(text, 'message error-message');
});

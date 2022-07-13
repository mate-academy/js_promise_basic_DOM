'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise is created!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

function createDiv(clas, text) {
  document.body.insertAdjacentHTML('afterbegin',
    `<div class="${clas}">${text}</div>`
  );
}

promise1.then(() => {
  createDiv('message', 'Promise is is created!');
});

promise2.catch(() => {
  createDiv('error-message', 'Promise was reject!');
});

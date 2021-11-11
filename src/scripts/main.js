'use strict';

// write your code here
const body = document.querySelector('body');

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    const resolveBlock = `
    <div class="message">
      Promise was resolved!
    </div>`;

    resolve(body.insertAdjacentHTML('beforeend', resolveBlock));
  });
});

const promise2 = new Promise((resolve, reject) => {
  const rejectBlock = document.createElement('div');

  rejectBlock.className = `error-message`;
  rejectBlock.innerText = `Promise was rejected!`;

  setTimeout(() => reject(new Error(body.append(rejectBlock))), 3000);
});

promise1.then();
promise2.catch();

'use strict';
// debugger;

const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const message = document.createElement('div');
const errorMessage = document.createElement('div');

message.innerHTML = `
  <div class="message">
    Promise was resolved!
  </div>`;

errorMessage.innerHTML = `
  <div class="error-message">
    Promise was rejected!
  </div>`;

const p1 = new Promise((resolve, reject) => {
  logo.onclick = () => resolve();
  setTimeout(() => reject(new Error()), 3000);
});

p1
  .then(() => body.insertAdjacentElement('afterbegin', message))
  .catch(() => body.insertAdjacentElement('afterbegin', errorMessage));

// now I understood))

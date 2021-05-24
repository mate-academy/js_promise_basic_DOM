'use strict';

const logo = document.querySelector('.logo');

class PromiseWasRejected extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = 'PromiseWasRejected';
  }
}

const err = new PromiseWasRejected(`Promise was rejected!`);

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve(`Promise was resolved!`);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(err.message);
  }, 3000);
});

promise1.then((result) => {
  logo.insertAdjacentHTML('afterend', `
      <div class="message">
        <span>
          ${result}
        </span>
      </div>
    `);
});

promise2.catch((message) => {
  logo.insertAdjacentHTML('afterend', `
      <div class="error-message">
        <span>
          ${message}
        </span>
      </div>
    `);
});

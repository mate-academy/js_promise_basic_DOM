'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(function() {
    reject(Error);
  }, 3000);
});

promise1
  .then((result) => {
    document.body.innerHTML += `
      <div class="message">
        Promise was resolved!
      </div>
    `;
  });

promise2
  .catch(() => {
    document.body.innerHTML += `
      <div class="error-message">
        Promise was rejected!
      </div>
    `;
  });

'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(function() {
    reject(new Error());
  }, 3000);
});

promise1
  .then((result) => {
    document.body.innerHTML = `
      <div class="message">
        Promise was resolved!
      </div>
    `;
  })

  .catch((er) => {
    document.body.innerHTML = `
      <div class="error-message">
        Promise was rejected!
      </div>
    `;
  });

promise2
  .then((result) => {
    document.body.innerHTML = `
    <div class="message">
      Promise was resolved!
    </div>
  `;
  })

  .catch((er) => {
    document.body.innerHTML = `
      <div class="error-message">
        Promise was rejected!
      </div>
    `;
  });

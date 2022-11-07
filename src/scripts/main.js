'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise(function(resolve) {
  logo.addEventListener('click', () => {
    document.body.innerHTML += `
    <div class="message">
      Promise was resolved!
    </div>
    `;

    resolve();
  });
});

const promise2 = new Promise(function(resolve, reject) {
  resolve(null);

  setTimeout(() => {
    document.body.innerHTML += `
    <div class="error-message">
      Promise was rejected!
    </div>
  `;

    reject(Error());
  }, 3000);
});

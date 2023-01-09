'use strict';

const body = document.querySelector('body');
const logo = document.getElementsByClassName('logo')[0];

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error('Promise was rejected!'));
  }, 3000);
});

promise1.then((result) => body.insertAdjacentHTML('beforeend', `
  <div class="message">
       ${result}
      </div>
`));

promise2.catch((error) => body.insertAdjacentHTML('beforeend', `
  <div class="message error-message">
    ${error}
  </div>`
));

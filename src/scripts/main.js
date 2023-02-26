'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

function creatPromise() {
  const resolver = (resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve();
    });

    setTimeout(() => reject(), 3000);
  };

  return new Promise(resolver);
}

const promis1 = creatPromise();
const promis2 = creatPromise();

promis1.then(() => {
  body.insertAdjacentHTML('beforeend', `
    <div class="message">
      Promise was resolved!
    </div>
  `);
});

promis2.catch(() => {
  body.insertAdjacentHTML('beforeend', `
    <div class="error-message message">
      Promise was rejected!
    </div>
  `);
});

'use strict';

const logo = document.querySelector('.logo');

function creatPromise() {
  const resolver = (resolve, reject) => {
    logo.addEventListener(`click`, () => {
      resolve();
    });
    setTimeout(() => reject(), 3000);
  };

  return new Promise(resolver);
}

const promis1 = creatPromise();
const promis2 = creatPromise();

promis1.then(() => {
  logo.insertAdjacentHTML('beforeend', `
    <div class="message">Promise was resolved!</div>
  `);
});

promis2.catch(() => {
  document.querySelector('body').insertAdjacentHTML('beforeend', `
  <div class="error-message">Promise was rejected!</div>
  `);
});

'use strict';

const body = document.body;

function createFirstPromise() {
  const resolver = (resolve) => {
    body.addEventListener('click', () => resolve('Success'));
  };

  return new Promise(resolver);
}

const promise1 = createFirstPromise();

promise1
  .then(result => {
    body.insertAdjacentHTML('afterbegin', `
        <div class="resolve">
          <span>${result}</span>
        </div>
      `);
  });

function createSecondPromise() {
  const resolver = (resolve, reject) => {
    setTimeout(() => reject('Error'), 5000);
  };

  return new Promise(resolver);
}

const promise2 = createSecondPromise();

promise2
  .catch(error => {
    body.insertAdjacentHTML('afterbegin', `
        <div class="reject">
          <span>${error}</span>
        </div>
      `);
  });

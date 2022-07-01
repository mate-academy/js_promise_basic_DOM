'use strict';

const promise1 = new Promise((resolve, reject) => {
  resolve();
});

const promise2 = new Promise((resolve, reject) => {
  reject(Error);
});

document.querySelector('.logo')
  .addEventListener('click', () => {
    promise1.then(
      document.getElementsByTagName('body')[0]
        .insertAdjacentHTML('beforeend', `
        <div class="message">Promise was resolved!</div>
  `)
    );
  });

setTimeout(() => promise2.catch(
  document.getElementsByTagName('body')[0]
    .insertAdjacentHTML('beforeend', `
      <div class="message error-message">Promise was rejected!</div>
  `)
), 3000);

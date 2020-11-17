'use strict';

const firstPromise = new Promise((resolve) => {
  resolve('First promise resolved!');
});
const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Second promise rejected!'));
  }, 5000);
});

document.addEventListener('click', () => {
  // eslint-disable-next-line no-console
  firstPromise.then(result => console.log(result));
  // eslint-disable-next-line no-console
  secondPromise.catch(result => console.log(result));
});

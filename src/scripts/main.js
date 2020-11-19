'use strict';

const button = document.querySelector('button');

const promise1 = new Promise(resolve => {
  button.addEventListener('click', () => {
    resolve('MA!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('Error!');
  }, 5000);
});

// eslint-disable-next-line no-console
promise1.then(result => console.log('Success:', result));

// eslint-disable-next-line no-console
promise2.catch(error => console.warn('Error:', error));

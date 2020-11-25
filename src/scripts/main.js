'use strict';

const logo = document.querySelector('.logo');

const firstPromise = new Promise(resolve => {
  logo.addEventListener('click', e => {
    resolve('this is logo');
  });
});

// eslint-disable-next-line no-console
firstPromise.then(result => console.log('succes:', result));

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error'));
  }, 5000);
});

// eslint-disable-next-line no-console
secondPromise.catch(error => console.warn(error));

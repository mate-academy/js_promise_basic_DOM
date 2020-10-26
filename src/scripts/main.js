'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.addEventListener('click', e => {
    resolve(`${e.clientY} ${e.clientX}`);
  });
});

promise1.then((result) => {
  // eslint-disable-next-line no-console
  console.log(result);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('To late to do somethng!!!!'));
  }, 5000);
});

promise2.catch((error) => {
  // eslint-disable-next-line no-console
  console.warn(error);
});
